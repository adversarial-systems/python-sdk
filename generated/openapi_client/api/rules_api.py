"""
    Groundlight API

    Easy Computer Vision powered by Natural Language  # noqa: E501

    The version of the OpenAPI document: 0.6.0
    Contact: support@groundlight.ai
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from openapi_client.api_client import ApiClient, Endpoint as _Endpoint
from openapi_client.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types,
)
from openapi_client.model.rule import Rule
from openapi_client.model.rule_creation_input import RuleCreationInput


class RulesApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.create_rule_endpoint = _Endpoint(
            settings={
                "response_type": (Rule,),
                "auth": ["ApiToken"],
                "endpoint_path": "/reef-api/actions/detector/{id}/rules",
                "operation_id": "create_rule",
                "http_method": "POST",
                "servers": None,
            },
            params_map={
                "all": [
                    "id",
                    "rule_creation_input",
                ],
                "required": [
                    "id",
                    "rule_creation_input",
                ],
                "nullable": [],
                "enum": [],
                "validation": [],
            },
            root_map={
                "validations": {},
                "allowed_values": {},
                "openapi_types": {
                    "id": (str,),
                    "rule_creation_input": (RuleCreationInput,),
                },
                "attribute_map": {
                    "id": "id",
                },
                "location_map": {
                    "id": "path",
                    "rule_creation_input": "body",
                },
                "collection_format_map": {},
            },
            headers_map={
                "accept": ["application/json"],
                "content_type": ["application/json", "application/x-www-form-urlencoded", "multipart/form-data"],
            },
            api_client=api_client,
        )

    def create_rule(self, id, rule_creation_input, **kwargs):
        """create_rule  # noqa: E501

        Create a new rule for a detector.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.create_rule(id, rule_creation_input, async_req=True)
        >>> result = thread.get()

        Args:
            id (str): Choose a detector by its ID.
            rule_creation_input (RuleCreationInput):

        Keyword Args:
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            async_req (bool): execute request asynchronously

        Returns:
            Rule
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs["async_req"] = kwargs.get("async_req", False)
        kwargs["_return_http_data_only"] = kwargs.get("_return_http_data_only", True)
        kwargs["_preload_content"] = kwargs.get("_preload_content", True)
        kwargs["_request_timeout"] = kwargs.get("_request_timeout", None)
        kwargs["_check_input_type"] = kwargs.get("_check_input_type", True)
        kwargs["_check_return_type"] = kwargs.get("_check_return_type", True)
        kwargs["_spec_property_naming"] = kwargs.get("_spec_property_naming", False)
        kwargs["_content_type"] = kwargs.get("_content_type")
        kwargs["_host_index"] = kwargs.get("_host_index")
        kwargs["id"] = id
        kwargs["rule_creation_input"] = rule_creation_input
        return self.create_rule_endpoint.call_with_http_info(**kwargs)
