'''
Created on Jun 12, 2013

@author: charlieb
'''

import datetime
import uuid
import cgi
import hmac
import binascii
import urllib
import hashlib
import requests

from string import Template

from django.conf import settings

# for testing; example TPI launch data...
TEST_TPI_PARAMS = {"custom_lastname": "Professor", "custom_course_id": "urn:udson:pearson.com/xl/certdb:course/1009405_xlnoedx_cert", "context_id": "urn:udson:pearson.com/xl/certdb:course/1009405", "custom_originating_partner": "xl", "custom_mode": "do", "custom_savevalues": "1", "custom_assignmenttitle": "Peter Test Assignment", "tool_consumer_instance_guid": "TPI", "oauth_signature": "0Lv4OetQIqxRYlDY3Z62RLs+nis=", "lti_message_type": "basic-lti-launch-request", "custom_print": "1", "custom_totalpoints": "1", "user_id": "urn:udson:pearson.com/xl/certdb:user/3073676", "custom_partnerId": "xlnoedx", "custom_resource_id": "urn:udson:pearson.com/xl/certdb:homework/10522577", "custom_tool_proxy_guid": "3de0f819-b2e5-4fbb-b232-5b94122dafa5", "custom_questiontitle_1": "Unemployment", "custom_currentquestion": "1", "custom_partialcredit": "1", "custom_institutionId": "cert", "custom_resultid": "urn:udson:pearson.com/xl/certdb:partnerhomeworkresult/100004077", "custom_displaycourseid": "0LM1V180L75Y91", "custom_person_id": "dip_prof1", "oauth_nonce": "181132134215879967", "oauth_timestamp": "1374088847", "custom_points_1": "1", "oauth_signature_method": "HMAC-SHA1", "oauth_version": "1.0", "custom_target_1": "unemployment", "resource_link_id": "UNKNOWN", "roles": "Educator", "context_type": "CourseSection", "lti_version": "LTI-1p0", "custom_membershipslastupdated": "2013-07-15T12:04:10.257Z", "custom_handler_urn": "pearson/xlnoedx_dip/slink/x-pearson-xlnoedx_dip", "custom_firstname": "DIP", "custom_attemptsallowed": "0", "oauth_consumer_key": "TPI", "custom_dateavailable": "2013-04-01T00:00:00Z"}

TEST_EXTRA_PARAMS = {
    'transactionId': uuid.uuid4(),
    'dataSourceName': 'Unemployment',
    'timeStamp': datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S'),
    'score': 3.1415927,
    'problem_guid': 'unemployment',
    'problemNumber': 1,
    'duration': 700,
    'submissionCount': 1
}

WRAPPER_TEMPLATE = '''
<tos:outcomeMessage xsi:schemaLocation="http://www.pearson.com/xsd/tpiOutcomesService_v1p0 tpiOutcomesService_v1p0.xsd" xsi:type="tos:OutcomeMessage.Type" xmlns:cor="http://www.imsglobal.org/services/lti/xsd/CoreOutcomesService_bv1p0" xmlns:tos="http://www.pearson.com/xsd/tpiOutcomesService_v1p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <tos:messageInfo>
      <tos:dataSource>${custom_tool_proxy_guid}</tos:dataSource>
      <tos:dataSourceName>${dataSourceName}</tos:dataSourceName>
      <tos:transactionId>${transactionId}</tos:transactionId>
      <tos:timestamp>$timeStamp</tos:timestamp>
      <tos:partnerId>${custom_partnerId}</tos:partnerId>
      <tos:institutionId>${custom_institutionId}</tos:institutionId>
      <tos:contextIdentifier>$context_id</tos:contextIdentifier>
   </tos:messageInfo>
   $messageBody
</tos:outcomeMessage>
'''

REPLACE_RESULT_TEMPLATE = '''
   <cor:replaceResultRequest>
      <cor:sourcedId>${custom_resultid}</cor:sourcedId>
      <cor:resultRecord>
         <cor:sourcedId>${custom_resultid}</cor:sourcedId>
         <cor:result>
            <cor:statusofResult>
               <cor:handle>complete</cor:handle>
               <cor:displayName>complete</cor:displayName>
            </cor:statusofResult>
            <cor:personSourcedId>${user_id}</cor:personSourcedId>
            <cor:lineItemSourcedId>${custom_resource_id}</cor:lineItemSourcedId>
            <cor:date>${timeStamp}</cor:date>
            <cor:resultScore>
               <cor:language>en-US</cor:language>
               <cor:textString>${score}</cor:textString>
            </cor:resultScore>
            <cor:dataSource>${custom_tool_proxy_guid}</cor:dataSource>
            <cor:extension>
                <cor:extensionField>
                    <cor:fieldName>resultDetail</cor:fieldName>
                    <cor:fieldType>any</cor:fieldType>
                    <cor:fieldValue xsi:type="xs:string" xmlns:xs="http://www.w3.org/2001/XMLSchema">${extensionBody}</cor:fieldValue>
                </cor:extensionField>
                <cor:extensionField>
                    <cor:fieldName>messageDate</cor:fieldName>
                    <cor:fieldType>any</cor:fieldType>
                    <cor:fieldValue>$timeStamp</cor:fieldValue>
                </cor:extensionField>
            </cor:extension>
         </cor:result>
      </cor:resultRecord>
   </cor:replaceResultRequest>
'''

SIMPLE_ITEM_RESULT_TEMPLATE = '''
<?xml version="1.0" encoding="utf-16"?>
<resultDetails xmlns:psr="http://www.pearson.com/services/SimpleResults/data/v1p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:psa="http://www.pearson.com/services/SimpleAssessment/data/v1p0" xmlns:tos="http://www.pearson.com/xsd/tpiOutcomesService_v1p0" xmlns:cor="http://www.imsglobal.org/services/lti/xsd/CoreOutcomesService_bv1p0">
    <psr:totalDuration></psr:totalDuration>
    <psr:parts>
        <psr:simpleSectionResult>
            <psr:parts>
              <psr:simpleItemResult>
                  <psr:itemBindingId>${problem_guid}</psr:itemBindingId>
                  <psr:itemId>${problemNumber}</psr:itemId>
                  <psr:itemScore>${score}</psr:itemScore>
                  <psr:duration>${duration}</psr:duration>
                  <psr:submissionCount>${submissionCount}</psr:submissionCount>
              </psr:simpleItemResult>
            </psr:parts>
        </psr:simpleSectionResult>
    </psr:parts>
</resultDetails>
'''
SIMPLE_ITEM_RESULT_TEMPLATE = ' '.join(SIMPLE_ITEM_RESULT_TEMPLATE.split())


def outcome_xml(params, **extra_params):
    params.update(extra_params)
    params['extensionBody'] = cgi.escape(Template(SIMPLE_ITEM_RESULT_TEMPLATE).substitute(params))
    params['messageBody'] = Template(REPLACE_RESULT_TEMPLATE).substitute(params)
    return Template(WRAPPER_TEMPLATE).substitute(params)


def oauth_sig(method, url, params):
    # If you dont have a token yet, the key should be only "CONSUMER_SECRET&"
    key = settings.TPI_SHARED_SECRET + '&'

    def quote(s):
        return urllib.quote(s, '')

    quotedParams = dict(params)
    print 'oauth_signature:', quotedParams.pop('oauth_signature')
    print 'params minus oauth_signature:', quotedParams
    quotedParams = sorted(quotedParams.iteritems(), key=lambda p: p[0])
    quotedParams = (quote(k) + '=' + quote(v) for (k, v) in quotedParams)
    quotedParams = quote('&'.join(quotedParams))

    quotedUrl = quote(url)

    raw = '&'.join([method, quotedUrl, quotedParams])

    print 'RAW: ', raw

    hashed = hmac.new(key, raw, hashlib.sha1)

    # The signature
    return binascii.b2a_base64(hashed.digest())[:-1]


def has_valid_signature(params):
    return params['oauth_signature'] == oauth_sig(settings.LAUNCH_METHOD, settings.LAUNCH_URL, params)


def submit_outcome(params, **extra_params):
    extra_params.update({
        'transactionId': uuid.uuid4(),
        'dataSourceName': 'GL',
        'timeStamp': datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S'),
    })
    url = settings.OUTCOMES_URL
    body = outcome_xml(params, **extra_params)
    auth = (settings.OUTCOMES_USER, settings.OUTCOMES_PW)
    print 'body:', body
    resp = requests.post(url, data=body, auth=auth)
    print 'resp:', resp, resp.content
    return resp

if __name__ == '__main__':
    # print outcome_xml(TEST_TPI_PARAMS, TEST_EXTRA_PARAMS)
    # sig = oauth_sig('POST', 'http://gldata.redhillstudios.com/gllaunch/toolLaunch/', TEST_TPI_PARAMS)
    # print 'SIG:', sig
    # for (k, v) in TEST_TPI_PARAMS.iteritems():
    #     print k+'='+v
    url = settings.OUTCOMES_URL
    body = outcome_xml(TEST_TPI_PARAMS, **TEST_EXTRA_PARAMS)
    print 'body:', body
    resp = requests.post(url, data=body, auth=(settings.OUTCOMES_USER, settings.OUTCOMES_PW))
    print 'resp:', resp, resp.content