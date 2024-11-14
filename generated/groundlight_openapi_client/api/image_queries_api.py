"""
    Groundlight API

    Groundlight makes it simple to understand images. You can easily create computer vision detectors just by describing what you want to know using natural language.  # noqa: E501

    The version of the OpenAPI document: 0.18.2
    Contact: support@groundlight.ai
    Generated by: https://openapi-generator.tech
"""

import re  # noqa: F401
import sys  # noqa: F401

from groundlight_openapi_client.api_client import ApiClient, Endpoint as _Endpoint
from groundlight_openapi_client.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types,
)
from groundlight_openapi_client.model.image_query import ImageQuery
from groundlight_openapi_client.model.paginated_image_query_list import PaginatedImageQueryList


class ImageQueriesApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.get_image_endpoint = _Endpoint(
            settings={
                "response_type": (file_type,),
                "auth": ["ApiToken"],
                "endpoint_path": "/v1/image-queries/{id}/image",
                "operation_id": "get_image",
                "http_method": "GET",
                "servers": None,
            },
            params_map={
                "all": [
                    "id",
                ],
                "required": [
                    "id",
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
                },
                "attribute_map": {
                    "id": "id",
                },
                "location_map": {
                    "id": "path",
                },
                "collection_format_map": {},
            },
            headers_map={
                "accept": ["image/jpeg"],
                "content_type": [],
            },
            api_client=api_client,
        )
        self.get_image_query_endpoint = _Endpoint(
            settings={
                "response_type": (ImageQuery,),
                "auth": ["ApiToken"],
                "endpoint_path": "/v1/image-queries/{id}",
                "operation_id": "get_image_query",
                "http_method": "GET",
                "servers": None,
            },
            params_map={
                "all": [
                    "id",
                ],
                "required": [
                    "id",
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
                },
                "attribute_map": {
                    "id": "id",
                },
                "location_map": {
                    "id": "path",
                },
                "collection_format_map": {},
            },
            headers_map={
                "accept": ["application/json"],
                "content_type": [],
            },
            api_client=api_client,
        )
        self.list_image_queries_endpoint = _Endpoint(
            settings={
                "response_type": (PaginatedImageQueryList,),
                "auth": ["ApiToken"],
                "endpoint_path": "/v1/image-queries",
                "operation_id": "list_image_queries",
                "http_method": "GET",
                "servers": None,
            },
            params_map={
                "all": [
                    "page",
                    "page_size",
                ],
                "required": [],
                "nullable": [],
                "enum": [],
                "validation": [],
            },
            root_map={
                "validations": {},
                "allowed_values": {},
                "openapi_types": {
                    "page": (int,),
                    "page_size": (int,),
                },
                "attribute_map": {
                    "page": "page",
                    "page_size": "page_size",
                },
                "location_map": {
                    "page": "query",
                    "page_size": "query",
                },
                "collection_format_map": {},
            },
            headers_map={
                "accept": ["application/json"],
                "content_type": [],
            },
            api_client=api_client,
        )
        self.submit_image_query_endpoint = _Endpoint(
            settings={
                "response_type": (ImageQuery,),
                "auth": ["ApiToken"],
                "endpoint_path": "/v1/image-queries",
                "operation_id": "submit_image_query",
                "http_method": "POST",
                "servers": None,
            },
            params_map={
                "all": [
                    "detector_id",
                    "human_review",
                    "image_query_id",
                    "inspection_id",
                    "metadata",
                    "patience_time",
                    "want_async",
                    "body",
                ],
                "required": [
                    "detector_id",
                ],
                "nullable": [],
                "enum": [],
                "validation": [],
            },
            root_map={
                "validations": {},
                "allowed_values": {},
                "openapi_types": {
                    "detector_id": (str,),
                    "human_review": (str,),
                    "image_query_id": (str,),
                    "inspection_id": (str,),
                    "metadata": (str,),
                    "patience_time": (float,),
                    "want_async": (str,),
                    "body": (file_type,),
                },
                "attribute_map": {
                    "detector_id": "detector_id",
                    "human_review": "human_review",
                    "image_query_id": "image_query_id",
                    "inspection_id": "inspection_id",
                    "metadata": "metadata",
                    "patience_time": "patience_time",
                    "want_async": "want_async",
                },
                "location_map": {
                    "detector_id": "query",
                    "human_review": "query",
                    "image_query_id": "query",
                    "inspection_id": "query",
                    "metadata": "query",
                    "patience_time": "query",
                    "want_async": "query",
                    "body": "body",
                },
                "collection_format_map": {},
            },
            headers_map={
                "accept": ["application/json"],
                "content_type": [
                    "image/jpeg",
                    "image/jpg",
                    "image/png",
                    "image/gif",
                    "image/webp",
                    "image/bmp",
                    "image/x-icon",
                ],
            },
            api_client=api_client,
        )

    def get_image(self, id, **kwargs):
        """get_image  # noqa: E501

        Retrieve an image by its ID.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_image(id, async_req=True)
        >>> result = thread.get()

        Args:
            id (str): Retrieve the image associated with the image query ID.

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
            file_type
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
        return self.get_image_endpoint.call_with_http_info(**kwargs)

    def get_image_query(self, id, **kwargs):
        """get_image_query  # noqa: E501

        Retrieve an image-query by its ID.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.get_image_query(id, async_req=True)
        >>> result = thread.get()

        Args:
            id (str): Choose an image query by its ID.

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
            ImageQuery
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
        return self.get_image_query_endpoint.call_with_http_info(**kwargs)

    def list_image_queries(self, **kwargs):
        """list_image_queries  # noqa: E501

        Retrieve a list of image-queries.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.list_image_queries(async_req=True)
        >>> result = thread.get()


        Keyword Args:
            page (int): A page number within the paginated result set.. [optional]
            page_size (int): Number of items to return per page.. [optional]
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
            PaginatedImageQueryList
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
        return self.list_image_queries_endpoint.call_with_http_info(**kwargs)

    def submit_image_query(self, detector_id, **kwargs):
        """submit_image_query  # noqa: E501

         Submit an image query against a detector.  You must use `\"Content-Type: image/jpeg\"` or similar (image/png, image/webp, etc) for the image data. For example: ```Bash $ curl https://api.groundlight.ai/device-api/v1/image-queries?detector_id=det_abc123 \\     --header \"Content-Type: image/jpeg\" \\     --data-binary @path/to/filename.jpeg ```   # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.submit_image_query(detector_id, async_req=True)
        >>> result = thread.get()

        Args:
            detector_id (str): Choose a detector by its ID.

        Keyword Args:
            human_review (str): If set to `DEFAULT`, use the regular escalation logic (i.e., send the image query for human review if the ML model is not confident). If set to `ALWAYS`, always send the image query for human review even if the ML model is confident. If set to `NEVER`, never send the image query for human review even if the ML model is not confident.. [optional]
            image_query_id (str): The ID to assign to the created image query.. [optional]
            inspection_id (str): Associate the image query with an inspection.. [optional]
            metadata (str): A dictionary of custom key/value metadata to associate with the image query (limited to 1KB).. [optional]
            patience_time (float): How long to wait for a confident response.. [optional]
            want_async (str): If \"true\" then submitting an image query returns immediately without a result. The result will be computed asynchronously and can be retrieved later.. [optional]
            body (file_type): [optional]
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
            ImageQuery
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
        kwargs["detector_id"] = detector_id
        return self.submit_image_query_endpoint.call_with_http_info(**kwargs)
