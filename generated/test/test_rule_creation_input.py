"""
    Groundlight API

    Easy Computer Vision powered by Natural Language  # noqa: E501

    The version of the OpenAPI document: 0.6.0
    Contact: support@groundlight.ai
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import openapi_client
from openapi_client.model.action import Action
from openapi_client.model.condition import Condition
from openapi_client.model.rule_base import RuleBase

globals()["Action"] = Action
globals()["Condition"] = Condition
globals()["RuleBase"] = RuleBase
from openapi_client.model.rule_creation_input import RuleCreationInput


class TestRuleCreationInput(unittest.TestCase):
    """RuleCreationInput unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testRuleCreationInput(self):
        """Test RuleCreationInput"""
        # FIXME: construct object with mandatory attributes with example values
        # model = RuleCreationInput()  # noqa: E501
        pass


if __name__ == "__main__":
    unittest.main()
