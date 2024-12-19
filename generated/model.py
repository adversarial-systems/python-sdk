# generated by datamodel-codegen:
#   filename:  public-api.yaml
#   timestamp: 2024-12-19T17:53:53+00:00

from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, Dict, List, Optional, Union

from pydantic import AnyUrl, BaseModel, Field, RootModel, confloat, conint, constr


class AnnotationsRequestedEnum(str, Enum):
    """
    * `BINARY_CLASSIFICATION` - Binary Classification
    * `BOUNDING_BOXES` - Bounding Boxes
    """

    BINARY_CLASSIFICATION = "BINARY_CLASSIFICATION"
    BOUNDING_BOXES = "BOUNDING_BOXES"


class BBoxGeometry(BaseModel):
    """
    Mixin for serializers to handle data in the StrictBaseModel format
    """

    left: float
    top: float
    right: float
    bottom: float
    x: float
    y: float


class BBoxGeometryRequest(BaseModel):
    """
    Mixin for serializers to handle data in the StrictBaseModel format
    """

    left: float
    top: float
    right: float
    bottom: float


class BlankEnum(Enum):
    field_ = ""


class DetectorGroup(BaseModel):
    id: str
    name: constr(max_length=100)


class DetectorGroupRequest(BaseModel):
    name: constr(min_length=1, max_length=100)


class DetectorTypeEnum(str, Enum):
    detector = "detector"


class EscalationTypeEnum(str, Enum):
    """
    * `STANDARD` - STANDARD
    * `NO_HUMAN_LABELING` - NO_HUMAN_LABELING
    """

    STANDARD = "STANDARD"
    NO_HUMAN_LABELING = "NO_HUMAN_LABELING"


class ImageQueryTypeEnum(str, Enum):
    image_query = "image_query"


class ModeEnum(str, Enum):
    BINARY = "BINARY"
    COUNT = "COUNT"
    MULTI_CLASS = "MULTI_CLASS"


class Note(BaseModel):
    detector_id: str
    content: str = Field(..., description="Text content of the note.")


class NoteRequest(BaseModel):
    content: constr(min_length=1) = Field(..., description="Text content of the note.")
    image: Optional[bytes] = None


class ROI(BaseModel):
    """
    Mixin for serializers to handle data in the StrictBaseModel format
    """

    label: str = Field(..., description="The label of the bounding box.")
    score: float = Field(..., description="The confidence of the bounding box.")
    geometry: BBoxGeometry


class ROIRequest(BaseModel):
    """
    Mixin for serializers to handle data in the StrictBaseModel format
    """

    label: constr(min_length=1) = Field(..., description="The label of the bounding box.")
    geometry: BBoxGeometryRequest


class ResultTypeEnum(str, Enum):
    binary_classification = "binary_classification"
    counting = "counting"
    multi_classification = "multi_classification"


class SnoozeTimeUnitEnum(str, Enum):
    """
    * `DAYS` - DAYS
    * `HOURS` - HOURS
    * `MINUTES` - MINUTES
    * `SECONDS` - SECONDS
    """

    DAYS = "DAYS"
    HOURS = "HOURS"
    MINUTES = "MINUTES"
    SECONDS = "SECONDS"


class SourceEnum(str, Enum):
    """
    * `INITIAL_PLACEHOLDER` - InitialPlaceholder
    * `CLOUD` - HumanCloud
    * `CUST` - HumanCustomer
    * `HUMAN_CLOUD_ENSEMBLE` - HumanCloudEnsemble
    * `ALG` - Algorithm
    * `ALG_REC` - AlgorithmReconciled
    * `ALG_UNCLEAR` - AlgorithmUnclear
    """

    INITIAL_PLACEHOLDER = "INITIAL_PLACEHOLDER"
    CLOUD = "CLOUD"
    CUST = "CUST"
    HUMAN_CLOUD_ENSEMBLE = "HUMAN_CLOUD_ENSEMBLE"
    ALG = "ALG"
    ALG_REC = "ALG_REC"
    ALG_UNCLEAR = "ALG_UNCLEAR"


class StatusEnum(str, Enum):
    """
    * `ON` - ON
    * `OFF` - OFF
    """

    ON = "ON"
    OFF = "OFF"


class VerbEnum(str, Enum):
    """
    * `ANSWERED_CONSECUTIVELY` - ANSWERED_CONSECUTIVELY
    * `ANSWERED_WITHIN_TIME` - ANSWERED_WITHIN_TIME
    * `CHANGED_TO` - CHANGED_TO
    * `NO_CHANGE` - NO_CHANGE
    * `NO_QUERIES` - NO_QUERIES
    """

    ANSWERED_CONSECUTIVELY = "ANSWERED_CONSECUTIVELY"
    ANSWERED_WITHIN_TIME = "ANSWERED_WITHIN_TIME"
    CHANGED_TO = "CHANGED_TO"
    NO_CHANGE = "NO_CHANGE"
    NO_QUERIES = "NO_QUERIES"


class Source(str, Enum):
    STILL_PROCESSING = "STILL_PROCESSING"
    CLOUD = "CLOUD"
    USER = "USER"
    CLOUD_ENSEMBLE = "CLOUD_ENSEMBLE"
    ALGORITHM = "ALGORITHM"


class Label(str, Enum):
    YES = "YES"
    NO = "NO"
    UNCLEAR = "UNCLEAR"


class BinaryClassificationResult(BaseModel):
    confidence: Optional[confloat(ge=0.0, le=1.0)] = None
    source: Optional[Source] = None
    label: Label


class CountingResult(BaseModel):
    confidence: Optional[confloat(ge=0.0, le=1.0)] = None
    source: Optional[Source] = None
    count: Optional[conint(ge=0)] = Field(...)
    greater_than_max: Optional[bool] = None


class MultiClassificationResult(BaseModel):
    confidence: Optional[confloat(ge=0.0, le=1.0)] = None
    source: Optional[Source] = None
    label: str


class CountModeConfiguration(BaseModel):
    max_count: Optional[conint(ge=1, le=50)] = None
    class_name: str


class MultiClassModeConfiguration(BaseModel):
    class_names: List[str]
    num_classes: Optional[int] = None


class ChannelEnum(str, Enum):
    TEXT = "TEXT"
    EMAIL = "EMAIL"


class Action(BaseModel):
    channel: ChannelEnum
    recipient: str
    include_image: bool


class ActionList(RootModel[List[Action]]):
    root: List[Action]


class AllNotes(BaseModel):
    """
    Serializes all notes for a given detector, grouped by type as listed in UserProfile.NoteCategoryChoices
    The fields must match whats in USERPROFILE.NoteCategoryChoices
    """

    CUSTOMER: List[Note]
    GL: List[Note]


class Condition(BaseModel):
    verb: VerbEnum
    parameters: Dict[str, Any]


class ConditionRequest(BaseModel):
    verb: VerbEnum
    parameters: Dict[str, Any]


class Detector(BaseModel):
    """
    Spec for serializing a detector object in the public API.
    """

    id: str = Field(..., description="A unique ID for this object.")
    type: DetectorTypeEnum = Field(..., description="The type of this object.")
    created_at: datetime = Field(..., description="When this detector was created.")
    name: constr(max_length=200) = Field(..., description="A short, descriptive name for the detector.")
    query: str = Field(..., description="A question about the image.")
    group_name: str = Field(..., description="Which group should this detector be part of?")
    confidence_threshold: confloat(ge=0.0, le=1.0) = Field(
        0.9,
        description=(
            "If the detector's prediction is below this confidence threshold, send the image query for human review."
        ),
    )
    patience_time: confloat(ge=0.0, le=3600.0) = Field(
        30.0, description="How long Groundlight will attempt to generate a confident prediction"
    )
    metadata: Optional[Dict[str, Any]] = Field(..., description="Metadata about the detector.")
    mode: ModeEnum
    mode_configuration: Optional[Dict[str, Any]] = Field(...)
    status: Optional[Union[StatusEnum, BlankEnum]] = None
    escalation_type: Optional[EscalationTypeEnum] = Field(
        None,
        description=(
            "Category that define internal proccess for labeling image queries\n\n* `STANDARD` - STANDARD\n*"
            " `NO_HUMAN_LABELING` - NO_HUMAN_LABELING"
        ),
    )


class DetectorCreationInputRequest(BaseModel):
    """
    Helper serializer for validating POST /detectors input.
    """

    name: constr(min_length=1, max_length=200) = Field(..., description="A short, descriptive name for the detector.")
    query: constr(min_length=1, max_length=300) = Field(..., description="A question about the image.")
    group_name: Optional[constr(min_length=1, max_length=100)] = Field(
        None, description="Which group should this detector be part of?"
    )
    confidence_threshold: confloat(ge=0.0, le=1.0) = Field(
        0.9,
        description=(
            "If the detector's prediction is below this confidence threshold, send the image query for human review."
        ),
    )
    patience_time: confloat(ge=0.0, le=3600.0) = Field(
        30.0, description="How long Groundlight will attempt to generate a confident prediction"
    )
    pipeline_config: Optional[constr(max_length=100)] = Field(
        None, description="(Advanced usage) Configuration needed to instantiate a prediction pipeline."
    )
    metadata: Optional[constr(min_length=1, max_length=1362)] = Field(
        None,
        description=(
            "Base64-encoded metadata for the detector. This should be a JSON object with string keys. The size after"
            " encoding should not exceed 1362 bytes, corresponding to 1KiB before encoding."
        ),
    )
    mode: ModeEnum = Field(
        "BINARY",
        description=(
            "Mode in which this detector will work.\n\n* `BINARY` - BINARY\n* `COUNT` - COUNT\n* `MULTI_CLASS` -"
            " MULTI_CLASS"
        ),
    )
    mode_configuration: Optional[Union[CountModeConfiguration, MultiClassModeConfiguration]] = None


class ImageQuery(BaseModel):
    """
    Spec for serializing a image-query object in the public API.
    """

    metadata: Optional[Dict[str, Any]] = Field(..., description="Metadata about the image query.")
    id: str = Field(..., description="A unique ID for this object.")
    type: ImageQueryTypeEnum = Field(..., description="The type of this object.")
    created_at: datetime = Field(..., description="When was this detector created?")
    query: str = Field(..., description="A question about the image.")
    detector_id: str = Field(..., description="Which detector was used on this image query?")
    result_type: ResultTypeEnum = Field(..., description="What type of result are we returning?")
    result: Optional[Union[BinaryClassificationResult, CountingResult, MultiClassificationResult]] = Field(...)
    patience_time: float = Field(..., description="How long to wait for a confident response.")
    confidence_threshold: float = Field(
        ..., description="Min confidence needed to accept the response of the image query."
    )
    rois: Optional[List[ROI]] = Field(
        ..., description="An array of regions of interest (bounding boxes) collected on image"
    )
    text: Optional[str] = Field(..., description="A text field on image query.")


class LabelValue(BaseModel):
    confidence: Optional[float] = Field(...)
    class_name: Optional[str] = Field(
        ..., description="Return a human-readable class name for this label (e.g. YES/NO)"
    )
    rois: Optional[List[ROI]] = None
    annotations_requested: List[AnnotationsRequestedEnum]
    created_at: datetime
    detector_id: Optional[int] = Field(...)
    source: SourceEnum
    text: Optional[str] = Field(..., description="Text annotations")


class LabelValueRequest(BaseModel):
    label: constr(min_length=1)
    image_query_id: constr(min_length=1)
    rois: Optional[List[ROIRequest]] = None


class PaginatedDetectorList(BaseModel):
    count: int = Field(..., example=123)
    next: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=4")
    previous: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=2")
    results: List[Detector]


class PaginatedImageQueryList(BaseModel):
    count: int = Field(..., example=123)
    next: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=4")
    previous: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=2")
    results: List[ImageQuery]


class PatchedDetectorRequest(BaseModel):
    """
    Spec for serializing a detector object in the public API.
    """

    name: Optional[constr(min_length=1, max_length=200)] = Field(
        None, description="A short, descriptive name for the detector."
    )
    confidence_threshold: confloat(ge=0.0, le=1.0) = Field(
        0.9,
        description=(
            "If the detector's prediction is below this confidence threshold, send the image query for human review."
        ),
    )
    patience_time: confloat(ge=0.0, le=3600.0) = Field(
        30.0, description="How long Groundlight will attempt to generate a confident prediction"
    )
    status: Optional[Union[StatusEnum, BlankEnum]] = None
    escalation_type: Optional[EscalationTypeEnum] = Field(
        None,
        description=(
            "Category that define internal proccess for labeling image queries\n\n* `STANDARD` - STANDARD\n*"
            " `NO_HUMAN_LABELING` - NO_HUMAN_LABELING"
        ),
    )


class Rule(BaseModel):
    id: int
    detector_id: str
    detector_name: str
    name: constr(max_length=44)
    enabled: bool = True
    snooze_time_enabled: bool = False
    snooze_time_value: conint(ge=0) = 0
    snooze_time_unit: SnoozeTimeUnitEnum = "DAYS"
    human_review_required: bool = False
    condition: Condition
    action: Union[Action, ActionList]


class RuleRequest(BaseModel):
    name: constr(min_length=1, max_length=44)
    enabled: bool = True
    snooze_time_enabled: bool = False
    snooze_time_value: conint(ge=0) = 0
    snooze_time_unit: SnoozeTimeUnitEnum = "DAYS"
    human_review_required: bool = False
    condition: ConditionRequest
    action: Union[Action, ActionList]


class PaginatedRuleList(BaseModel):
    count: int = Field(..., example=123)
    next: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=4")
    previous: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=2")
    results: List[Rule]
