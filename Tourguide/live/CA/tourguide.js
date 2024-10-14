var tourData = [];
var touritem = {};

touritem["User/Dashboard"] = {
  ModuleDisplayName: "Company Setup",
  ModuleName: "User",
  displayName: "Dashboard",
  items: [
    {
      selector: "div#fullMenuUl",
      step: 1,
      title: "FullMenu",
      content: "FullMenuContent",
    },
    {
      selector: "ul.my-account",
      step: 2,
      title: "ProflieMenu",
      content: "ProflieMenuContent",
    },
    {
      selector: "#DivTimerContent",
      step: 3,
      title: "TimerIcon",
      content: "TimerIconContent",
    },
    {
      selector: "li.wizardnew",
      step: 4,
      title: "WizardIcon",
      content: "WizardIconContent",
    },
    {
      selector: "#anceditMyDashboard",
      step: 5,
      title: "MyShortcuts",
      content: "MyShortcutsContent",
    },
    {
      selector: ".rightsideicon",
      step: 6,
      title: "MyShortcutsCustom",
      content: "MyShortcutsContent",
    },
    {
      selector: "#ancAddGroupMyDashboard",
      step: 7,
      title: "AddNewGroup",
      content: "AddNewGroupContent",
    },
    {
      selector: ".clsdashboardgroup ul.shortcuts-menu li:first-child",
      step: 8,
      title: "ShortcutLink",
      marked: true,
      content: "ShortcutLinkContent",
    },
  ],
};

// touritem["User/Home"] = {
//   ModuleDisplayName: "Company Setup",
//   ModuleName: "User",
//   displayName: "Home",
//   items: [
//     {
//       selector: "#headingOne1",
//       step: 1,
//       title: "Inbox",
//       content: "InboxContent",
//     },
//     {
//       selector: "#headingTwo2",
//       step: 2,
//       title: "Activities",
//       content: "ActivitiesContent",
//     },
//     {
//       selector: "#headingThree2",
//       step: 3,
//       title: "Bookmarks",
//       content: "Bookmarks",
//     },
//     {
//       selector: "#divInboxSibling",
//       step: 4,
//       title: "Reports",
//       content: "ReportsContent",
//     },
//     {
//       selector: "#hlkAddMoreReports",
//       step: 5,
//       title: "AddMore",
//       content: "AddMoreContent",
//     },
//   ],
// };
touritem["Project/Index"] = {
  ModuleDisplayName: "Project Management",
  MouseEvent: "Project",
  ModuleName: "Project",
  displayName: "Project",
  items: [
    {
      selector: ".WalkHRLeaveWidgetContent_ul",
      step: 1,
      title: "Widgets",
      content: "SummaryWidgets",
    },
    {
      selector: "#accordionEx",
      step: 2,
      title: "Filters",
      content: "SearchMultipleFiltersProject",
    },
    {
      selector: "#PAdd",
      step: 3,
      title: "AddNewProject",
      content: "SummaryWidgetsContent",
    },
    {
      selector: "#temp_0",
      step: 4,
      title: "PleaseSelectTemplate",
      content: "SummaryTemplateContent",
    },
    {
      selector: "#btnNext",
      step: 5,
      title: "Next",
      content: "SummaryTemplateNextContent",
    },
    {
      selector: "#SProjectDetailTitleSpan",
      step: 6,
      title: "SummaryProjectDetailTitle",
      content: "SummaryProjectDetailContent",
    },
    {
      selector: "a#aAddUser",
      step: 7,
      title: "AddTeamMembers",
      content: "AddTeamMembersContent",
    },
    {
      selector: "#SummaryProjectSaveContent_a",
      step: 8,
      title: "FinishSetup",
      content: "FinishSetupContent",
    },
  ],
};
touritem["CRM/Index"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Lead",
  items: [
    {
      selector: "#titleName",
      step: 1,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: "#ExportToExcel",
      step: 4,
      title: "ExporttoExcel",
      content: "LeadExporttoExcelContent",
    },
    {
      selector: "#ImportLeads",
      step: 5,
      title: "ImportLeads",
      content: "ImportLeadsContent",
    },
    {
      selector: "#ChangeOwnerId",
      step: 6,
      title: "ChangeLeadOwner",
      content: "ChangeLeadOwnerContent",
    },
    {
      selector: "#AdditionalOwnerId",
      step: 7,
      title: "AdditionalOwnerId",
      content: "AdditionalOwnerIdContent",
    },
    {
      selector: "#Sendbulkmail",
      step: 8,
      title: "SendEmail",
      content: "SendEmailContent",
    },
    {
      selector: "#CloseLeadId",
      step: 9,
      title: "CloseLeads",
      content: "CloseLeadsContent",
    },
    {
      selector: "#action-list",
      step: 10,
      title: "actionButton",
      content: "actionButtonContent",
    },
  ],
};
touritem["CommunicationModes/Index"] = {
  ModuleDisplayName: "CRM Management",
  displayName: "CRM",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchCommunicationFilterContent",
    },
    {
      selector: "#AddManageCommunicationModes",
      step: 2,
      title: "Add",
      content: "AddManageCommunicationModes",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 3,
      title: "Status" + " " + "Update",
      content: "UpdateAddManageCommunicationModes",
    },
  ],
};
touritem["CRM/Dashboard"] = {
  ModuleDisplayName: "CRM Management",
  displayName: "CRM",
  items: [
    {
      selector: "#MyViews",
      step: 1,
      title: "MyView",
      content: "MyViewContent",
    },
    {
      selector: "#teamview",
      step: 2,
      title: "TeamView",
      content: "TeamViewContent",
    },
    {
      selector: "#ddlChangeView",
      step: 3,
      title: "SelectView",
      content: "SelectViewContent",
    },
    {
      selector: "#aViewPin_global",
      step: 4,
      title: "PinView",
      content: "PinViewContent",
    },
    {
      selector: "#aDateLable_global",
      step: 5,
      title: "ReportSearchFilters",
      content: "ReportSearchFiltersContent",
    },
  ],
};
touritem["CRM/LeadList"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Lead List",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchLeadFilterContent",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 2,
      title: "Status" + " " + "Update",
      content: "UpdateLeadStatusContent",
    },
    {
      selector: "#addLead_a",
      step: 3,
      title: "AddLead",
      content: "AddLeadContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewLeadContent",
    },
  ],
};
touritem["Expenses/Index"] = {
  ModuleDisplayName: "Expense Module",
  ModuleName: "Expenses",
  displayName: "Expenses",
  items: [
    {
      selector: ".ExpenseData_LeftMenu",
      step: 1,
      title: "SearchFilters",
      content: "SearchFiltersContent",
    },
    {
      selector: ".addExpense_Span",
      step: 2,
      title: "AddExpenses",
      content: "AddExpensesContent",
    },
    {
      selector: ".ddlupdatestatus",
      step: 3,
      title: "ManageTicketStatus",
      content: "ManageTicketStatusContent",
    },
    {
      selector: "#aCommanApproval",
      step: 4,
      title: "SendExpense",
      content: "SendExpenseContent",
    },
  ],
};
touritem["Expenses/Add"] = {
  ModuleDisplayName: "Expense Module",
  ModuleName: "Expenses",
  displayName: "Add Expense",
  items: [
    {
      selector: "#aSendForApproval",
      step: 1,
      title: "ExpenseAdd",
      content: "ExpenseAddContent",
    },
  ],
};
touritem["Expenses/Import"] = {
  ModuleDisplayName: "Expense Module",
  ModuleName: "Expenses",
  displayName: "Import Expense",
  items: [
    {
      selector: ".downloadExpense",
      step: 1,
      title: "SampleFile",
      content: "SampleFileContent",
    },
    {
      selector: ".expenseFile",
      step: 2,
      title: "ChooseExpenseFile",
      content: "ChooseExpenseFileContent",
    },
  ],
};
touritem["Expenses/BulkUpload"] = {
  ModuleDisplayName: "Expense Module",
  ModuleName: "Expenses",
  displayName: "Bulk Upload Expense",
  items: [
    {
      selector: "#aValidate",
      step: 1,
      title: "ExpenseDetails",
      content: "ExpenseDetailsContent",
    },
  ],
};
touritem["ExpenseApproval/Index"] = {
  ModuleDisplayName: "Expense Module",
  ModuleName: "Expenses",
  displayName: "Expense Approval",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchFiltersContent",
    },
    {
      selector: "#hlkApprove",
      step: 2,
      title: "approveExpense",
      content: "approveExpenseContent",
    },
    {
      selector: "#hlkReject",
      step: 3,
      title: "RejectExpense",
      content: "RejectExpenseContent",
    },
  ],
};
touritem["ClientBill/Index"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "ClientBill",
  displayName: "Invoice",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchFilterInvoiceContent",
    },
    {
      selector: ".manualInvoice_a",
      step: 2,
      title: "Manual" + " " + "Invoice",
      content: "ManualInvoiceContent",
    },
    {
      selector: ".InvoiceStatus_Span",
      step: 3,
      title: "Update" + " " + "InvoiceStatus",
      content: "InvoiceStatusContent",
    },
  ],
};
touritem["BillingRule/RuleListing"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "ClientBill",
  displayName: "BillingRule",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchRule",
      content: "SearchBillingRules",
    },
    {
      selector: ".ddlupdatestatus",
      step: 2,
      title: "StatusUpdate",
      content: "ChangeBillingRulestatus",
    },
    {
      selector: ".enable",
      step: 3,
      title: "ViewRule",
      content: "ViewYourBillingRuleDetails",
    },
    {
      selector: ".addBillingRule",
      step: 4,
      title: "AddRule",
      content: "CreateNewBillingRule",
    },
  ],
};
touritem["BillingRule/NodeConfiguration"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "ClientBill",
  displayName: "Add Update BillingRule",
  items: [
    {
      selector: "#myTab",
      step: 1,
      title: "GeneralInformation",
      content: "EnterTheRequiredInformation",
    },
    {
      selector: "#ancNodesData",
      step: 2,
      title: "BillingNode",
      content: "SetupParentAndChildBillingNodes",
    },
    {
      selector: "#btnSaveAndClose",
      step: 3,
      title: "Limits",
      content: "AddLimitsToTheBillingRule",
    },
    {
      selector: "#ancNodesDataTopMost",
      step: 4,
      title: "SaveTheRule",
      content: "CongratsYouHaveCreatedYourFirstBillingRule",
    },
  ],
};
touritem["BillingService/Index"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "ClientBill",
  displayName: "Billing Services",
  items: [
    {
      selector: ".ddlupdatestatus",
      step: 2,
      title: "StatusUpdate",
      content: "ChangeBillingServiceStatus",
    },
    {
      selector: "._ancServiceUpdateHistory",
      step: 2,
      title: "HistoricData",
      content: "ViewYouTheBillingServiceHistory",
    },
    {
      selector: ".CloneService",
      step: 3,
      title: "ServiceCloning",
      content: "CloningAllowsYouToCreateDuplicateService",
    },
    {
      selector: ".p-action-btn .text-white",
      step: 4,
      title: "CreateService",
      content: "CreateNewBillingService",
    },
    {
      selector: "#btnSave",
      step: 5,
      title: "EnterServiceDetails",
      content: "CongratsYouHaveCreatedBillingServiceSuccessfully",
    },
  ],
};
touritem["ClientInvoice/CatchAll"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "ClientBill",
  displayName: "BillingRule Listing",
  items: [
    {
      selector: "#ancProcess",
      step: 2,
      title: "ProcessRecords",
      content: "RecordsAreFlaggedBasedOnBilling ",
    },
    {
      selector: "#donotproceelineitems",
      step: 2,
      title: "DoNotBill",
      content: "SelectTheFlagRecordsAndMark ",
    },
    {
      selector: "#changeColumnValueLineItems",
      step: 3,
      title: "ManageFlagRecords",
      content: "FixFlaggedRecording",
    },
  ],
};
touritem["ClientInvoice/CatchAll"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "ClientBill",
  displayName: "BillingRule Listing",
  items: [
    {
      selector: "#Go",
      step: 1,
      title: "SearchFilters",
      content: "SearchForRecordsUsingPreDefined",
    },
    {
      selector: "#ancviewImage",
      step: 2,
      title: "TicketDetails",
      content: "ViewTheExactTicketDetails  ",
    },
    {
      selector: "#ancedit",
      step: 3,
      title: "ManageRecords",
      content: "EditTheBilledUnbilledRecords",
    },
  ],
};
touritem["ClientInvoice/CatchAll"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "ClientBill",
  displayName: "Client Invoice",
  items: [
    {
      selector: "#BulkMoveUsingFile",
      step: 1,
      title: "BulkMove",
      content: "UseBulkMoveOptionProcessBulkRecords",
    },
  ],
};

touritem["Client/Index"] = {
  ModuleDisplayName: "Company Setup",
  ModuleName: "User",
  displayName: "Client",
  items: [
    {
      selector: "#accordionEx .left-filter",
      step: 1,
      title: "SearchRule",
      content: "SearchAccountUsingPredefinedSearchFilters",
    },
    {
      selector: ".actions .action_icon",
      step: 2,
      title: "ManageConfigurations",
      content: "SetupConfigurationTheAccount",
    },
    {
      selector: ".actions .action_icon",
      step: 3,
      title: "EnterTheRequiredInformation",
      content: "SelectRequiredOptionsSetupYouContractSettings",
    },
  ],
};
touritem["Training/Index"] = {
  ModuleDisplayName: "Training",
  ModuleName: "Training",
  displayName: "Index",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "Search your trainings using the search filters.",
    },
    {
      selector: "#ancCreateTraining",
      step: 2,
      title: "AddTraining",
      content: "AddTrainingContent",
    },
  ],
};
touritem["Training/Add"] = {
  ModuleDisplayName: "Training",
  ModuleName: "Training",
  displayName: "Add",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "TrainingSetup",
      content: "AddRequiredDetailsLikeVenueAndSetupYourTrainingSession",
    },
    {
      selector: "#ancCreateTraining",
      step: 2,
      title: "AddTraining",
      content: "AddTrainingContent",
    },
  ],
};
touritem["Training/Trainingview"] = {
  ModuleDisplayName: "Training",
  ModuleName: "Training",
  displayName: "Trainingview",
  items: [
    {
      selector: ".responivecustomtab",
      step: 1,
      title: "ManageTraining",
      content: "SetupQuestionnaireAddAttachmentsTraining",
    },
  ],
};
touritem["HR/LeaveList"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Leave List",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkHRLeaveSearchContent",
    },
    {
      selector: ".WalkHRLeaveWidgetContent_ul",
      step: 2,
      title: "Widgets",
      content: "WalkHRLeaveWidgetContent",
    },
    {
      selector: ".leaveaction_span .applyleave",
      step: 3,
      title: "AddLeave",
      content: "ApplyForLeaveAndSendItForApproval",
    },
  ],
};
touritem["HR/LeaveTypeListing"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Leave Type Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkHRLeaveTypeSearchContent",
    },
    {
      selector: ".addLeaveType_a",
      step: 2,
      title: "Add" + " " + "Leave" + " " + "Type",
      content: "WalkHRLeaveTypeAddContent",
    },
  ],
};
touritem["HR/index"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "HR",
  items: [
    {
      selector: "#txtLeaveType",
      step: 1,
      title: "Add" + " " + "Leave" + " " + "Type",
      content: "WalkHRLeaveTypeAddPageContent",
    },
  ],
};
touritem["LeaveApproval/Index"] = {
  ModuleDisplayName: "Approval",
  ModuleName: "ApprovalChain",
  displayName: "Leave Approval",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "LeaveApproveRejectSearchContent",
    },
    {
      selector: ".LeaveApproveRejectContent_span",
      step: 2,
      title: "Approve" + " " + "And" + " " + "Reject",
      content: "LeaveApproveRejectContent",
    },
  ],
};
touritem["CRM/ManageLead"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Manage Lead",
  items: [
    {
      selector: ".AddLeadDetail_a",
      step: 1,
      title: "enter" + " " + "LeadDetail",
      content: "AddLeadDetailContent",
    },
  ],
};
touritem["CRM/DealListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Deal Listing",
  items: [
    {
      selector: ".SearchFilters_div",
      step: 1,
      title: "SearchFilters",
      content: "SearchDealFilterContent",
    },
    {
      selector: "#crmdeals_status",
      step: 2,
      title: "Status" + " " + "Update",
      content: "UpdateDealStatusContent",
    },
    {
      selector: "#AddDealContent_a",
      step: 3,
      title: "Add" + " " + "Deal",
      content: "AddDealContent",
    },
    {
      selector: "#ViewDealDetailContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewDealDetailContent",
    },
  ],
};
touritem["ApprovalChain/Index"] = {
  ModuleDisplayName: "Approval",
  ModuleName: "ApprovalChain",
  displayName: "Approval Chain",
  items: [
    {
      selector: ".accordion",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkApprovalChainSearchContent",
    },
    {
      selector: "#ancCreateDepartment",
      step: 2,
      title: "WalkApprovalChainAddTitle",
      content: "WalkApprovalChainAddContent",
    },
  ],
};
touritem["CRM/ViewDealDetails"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "View Deal Details",
  items: [
    {
      selector: ".div-click-event",
      step: 1,
      title: "Deal" + " " + "Management",
      content: "ManageDealContent",
    },
    {
      selector: ".wizard",
      step: 2,
      title: "Deal" + " " + "Stages",
      content: "ManageDealStageContent",
    },
  ],
};
touritem["CRM/ManageAccount"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Manage Account",
  items: [
    {
      selector: ".formbtn",
      step: 1,
      title: "AddAccount",
      content: "AddAccountDetailContent",
    },
  ],
};
touritem["CRM/ManageAccountEdit"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Manage Account",
  items: [
    {
      selector: ".formbtn",
      step: 1,
      title: "EditAccount",
      content: "UpdateAccountDetailContent",
    },
  ],
};
touritem["ApprovalGroup/Index"] = {
  ModuleDisplayName: "Approval",
  ModuleName: "ApprovalChain",
  displayName: "Approval Group",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkApprovalGroupSearchContent",
    },
    {
      selector: "#ancCreateDepartment",
      step: 2,
      title: "Add" + " " + "Approval" + " " + "Group",
      content: "WalkApprovalGroupAddContent",
    },
  ],
};
touritem["ApprovalRule/Index"] = {
  ModuleDisplayName: "Approval",
  ModuleName: "ApprovalChain",
  displayName: "Approval Rule",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkApprovalRuleSearchContent",
    },
    {
      selector: "#ancCreateExp",
      step: 2,
      title: "Add" + " " + "Rule",
      content: "WalkApprovalRuleAddClickContent",
    },
  ],
};
touritem["ApprovalRule/Add"] = {
  ModuleDisplayName: "Approval",
  ModuleName: "ApprovalChain",
  displayName: "Add Approval Rule",
  items: [
    {
      selector: "#divApprovalType",
      step: 1,
      title: "Module" + " " + "selections",
      content: "WalkApprovalRuleChooseModuleContent",
    },
    {
      selector: ".divUseSequence_a",
      step: 2,
      title: "UseSequence",
      content: "WalkApprovalRuleMarkYesContent",
    },
  ],
};
touritem["CRM/ItemTypeListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Item Type Listing",
  items: [
    {
      selector: ".additean_a",
      step: 1,
      title: "AddItemType",
      content: "AddItemTypeContent",
    },
    {
      selector: ".divUseSequence_a",
      step: 2,
      title: "SearchFilters",
      content: "SearchItemTypeFilterContent",
    },
    {
      selector: ".tourguide_a",
      step: 3,
      title: "View" + " " + "Detail",
      content: "ViewItemtypeDetailContent",
    },
    {
      selector: ".tourguide_aa",
      step: 4,
      title: "Edit" + " " + "Detail",
      content: "EditItemtypeContent",
    },
  ],
};
touritem["CRM/PurchaseOrderListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Purchase Order Listing",
  items: [
    {
      selector: "#titleName",
      step: 1,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: "#action-list",
      step: 4,
      title: "actionButton",
      content: "actionButtonContent",
    },
  ],
};

touritem["CRM/ItemListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Item Listing",
  items: [
    {
      selector: "#AddProducts",
      step: 1,
      title: "AddItem",
      content: "AddItemContent",
    },
    {
      selector: ".tour_search",
      step: 2,
      title: "SearchFilters",
      content: "SearchItemFilterContent",
    },
    {
      selector: ".tour_viewitem",
      step: 3,
      title: "View" + " " + "Detail",
      content: "ViewItemDetailContent",
    },
    {
      selector: ".tour_edititem",
      step: 4,
      title: "View" + " " + "Detail",
      content: "EditItemContent",
    },
  ],
};
touritem["Asset/Add"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Add Asset",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "AddAssetType",
      content: "AddAssetTypeContent",
    },
  ],
};
touritem["CRM/SalesOrderListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Sales Order Listing",
  items: [
    {
      selector: ".divSalesOrderkData_search",
      step: 1,
      title: "SearchFilters",
      content: "SearchSaleOrderFilterContent",
    },
    {
      selector: "#AddSaleOrderTitle",
      step: 2,
      title: "AddSaleOrderTitle",
      content: "AddSaleOrderContent",
    },
    {
      selector: ".text-overflow-dynamic-container",
      step: 3,
      title: "ViewDetail",
      content: "ViewSaleOrderContent",
    },
  ],
};
touritem["CRM/ViewSalesOrderDetails"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "View Sales Order Details",
  items: [
    {
      selector: ".div-click-event",
      step: 1,
      title: "Sale" + "" + "Order" + "" + "Activity",
      content: "ViewSaleOrderDetailContent",
    },
  ],
};
touritem["CRM/Accounts"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Accounts",
  items: [
    {
      selector: ".account_widget",
      step: 1,
      title: "Widgets",
      content: "SearchAccountFilterContent",
    },
    {
      selector: ".account_tour",
      step: 2,
      title: "SearchFilters",
      content: "SearchAccountFilter1Content",
    },
    {
      selector: "#ancCreateDepartment",
      step: 3,
      title: "AddAccount",
      content: "AddAccountContent",
    },
    {
      selector: "#dialogAddAccountType",
      step: 4,
      title: "Select" + "" + "Account",
      content: "SelectAccountContent",
    },
  ],
};
touritem["CRM/CampaignListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Campaign Listing",
  items: [
    {
      selector: ".divMainCampaignData_a",
      step: 1,
      title: "SearchFilters",
      content: "SearchCampaignFilterContent",
    },
    {
      selector: ".addCampaign_a",
      step: 2,
      title: "AddCampaign",
      content: "AddCampaignContent",
    },
  ],
};
touritem["CRM/ContactListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Contact Listing",
  items: [
    {
      selector: ".divContactData_a",
      step: 1,
      title: "SearchFilters",
      content: "SearchContactFilterContent",
    },
    {
      selector: ".addcontact_a",
      step: 2,
      title: "AddContact",
      content: "AddContactContent",
    },
  ],
};
touritem["CRM/ContractListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Contract Listing",
  items: [
    {
      selector: ".divContactData_a",
      step: 1,
      title: "SearchFilters",
      content: "SearchContractFilterContent",
    },
    {
      selector: ".addcontact_a",
      step: 2,
      title: "AddContract",
      content: "AddContractContent",
    },
    {
      selector: "#action-list",
      step: 3,
      title: "AddContract",
      content: "AddContractContent",
    },
  ],
};
touritem["CRM/ManageCampaign"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Manage Campaign",
  items: [
    {
      selector: ".btn_save_a",
      step: 1,
      title: "enter" + " " + "Campaign" + "" + "Detail",
      content: "AddCampaignDetailContent",
    },
  ],
};
touritem["CRM/ManageContact"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Add Contact",
  items: [
    {
      selector: ".formbtn",
      step: 1,
      title: "ContactDetail",
      content: "AddContactDetailContent",
    },
  ],
};
touritem["CRM/ManageContract"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Add Contract",
  items: [
    {
      selector: ".btn_a",
      step: 1,
      title: "Contract" + "" + "Detail",
      content: "AddContractDetailContent",
    },
  ],
};
touritem["Brand/SocialConnect"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Social Connect",
  items: [
    {
      selector: ".SocialMedia_a",
      step: 1,
      title: "SocialMedia",
      content: "SocialMediaContent",
    },
  ],
};
touritem["Brand/BrandListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Brand Listing",
  items: [
    {
      selector: ".SocialMedia_a",
      step: 1,
      title: "Setup" + "" + "New" + "" + "Brand",
      content: "SetupNewBrandContent",
    },
    {
      selector: ".SocialMedia_b",
      step: 2,
      title: "enter" + "" + "Brand" + "" + "Detail",
      content: "AddBrandDetailContent",
    },
    {
      selector: ".SocialMedia_c",
      step: 3,
      title: "Connect",
      content: "ConnectContent",
    },
  ],
};
touritem["ApprovalChain/GroupList"] = {
  ModuleDisplayName: "Approval",
  ModuleName: "ApprovalChain",
  displayName: "Approval Chain GroupList",
  items: [
    {
      selector: ".SocialMedia_a",
      step: 1,
      title: "Order" + "" + "Management",
      content: "WalkApprovalChainUpArrowContent",
    },
    {
      selector: ".SocialMedia_b",
      step: 2,
      title: "Order" + "" + "Management",
      content: "WalkApprovalChainDownArrowContent",
    },
  ],
};
touritem["ApprovalChain/add"] = {
  ModuleDisplayName: "Approval",
  ModuleName: "ApprovalChain",
  displayName: "Add Approval Chain",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "WalkApprovalChainAddButtonTitle",
      content: "WalkApprovalChainAddButtonContent",
    },
  ],
};
touritem["JobPost/JobListing"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "Hiring",
  displayName: "Job Listing",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "SearchFilters",
      content: "Search" + "" + "Job",
    },
  ],
};
touritem["HR/TalentPoolList"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "Hiring",
  displayName: "Talent Pool List",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "SearchFilters",
      content: "Search" + " " + "TalentPool",
    },
  ],
};
touritem["FSM/worktypeListing"] = {
  ModuleDisplayName: "FSM Management",
  ModuleName: "FSM",
  displayName: "FSM work type Listing",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "SearchFilters",
      content: "Search",
    },
  ],
};
touritem["CRM/ViewLeadDetails"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Lead Details",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "Lead" + "" + "Timeline",
      content: "ViewLeadDetailContent",
    },
    {
      selector: ".hr_jobpost_a",
      step: 2,
      title: "Lead" + "" + "Management",
      content: "ManageLeadContent",
    },
    {
      selector: ".hr_jobpost_b",
      step: 3,
      title: "LeadConversionTitle",
      content: "LeadConversionContent",
    },
  ],
};
touritem["Timer/BulkTimeEntry"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "BulkTimeEntry",
  items: [
    {
      selector: "#ddlProjectsBulk",
      step: 1,
      title: "Projects",
      content: "SelectProject",
    },
    {
      selector: ".multiselect-native-select",
      step: 2,
      title: "Users",
      content: "SelectUser",
    },
    {
      selector: "#aFillTimeEntry",
      step: 3,
      title: "FillTimeEntry",
      content: "EnterTimeEntryDetailsYourEmployees",
    },
    {
      selector: "#aAddnewLine",
      step: 4,
      title: "BulkTimeEntry",
      content: "AddMultipleTimeEntriesForMultipleEmployeesInOneGo",
    },
    {
      selector: "#btnSave",
      step: 5,
      title: "SaveTheDetails",
      content: "CongratsYouhaveSuccessfullySavedBulkTimeEntries",
    },
  ],
};
touritem["Asset/Dashboard"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Dashboard",
  items: [
    {
      selector: "#aDateLable_global",
      step: 1,
      title: "DateSelection",
      content: "SelectYourDateViewReports",
    },
    {
      selector: "#hlkAddMoreReports",
      step: 2,
      title: "AddReport",
      content: "AddMoreReports",
    },
  ],
};
// touritem["AssetCatalog/Index"] = {
//   ModuleDisplayName: "Asset Management",
//   ModuleName: "Asset",
//   displayName: "Manage Catalog",
//   items: [
//     {
//       selector: "#accordionEx",
//       step: 1,
//       title: "SearchFilters",
//       content: "SearchYourProductsUsingFilters",
//     },
//     // {
//     //   selector: "#ancCreateJob",
//     //   step: 2,
//     //   title: "AddAssetCatalogue",
//     //   content: "AddNewProductYourProductCatalogue",
//     // },

//     {
//       selector: "#titleName",
//       step: 2,
//       title: "Default View",
//       content: "DefaultView",
//     },

//     {
//       selector: "#manageViewbutton",
//       step: 3,
//       title: "Manage View",
//       content: "ManageViewSteps",
//     },

//     {
//       selector: "#addManageView",
//       step: 4,
//       title: "Add New",
//       content: "AddMangeView",
//     },

//     {
//       selector: "#filterProductAssingment",
//       step: 5,
//       title: "Filters",
//       content: "FiltersProudctAssignment",
//     },

//   ],
// };
touritem["AssetCatalog/Add"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Asset Catalog Add",
  items: [
    {
      selector: ".productCreateTab1",
      step: 1,
      title: "EnterProductDetails",
      content: "SelectProductTypeFillRequiredDetails",
    },
    {
      selector: "#ancDeployItems",
      step: 2,
      title: "AddAssetCatalogue",
      content: "AddNewProductYourProductCatalogue",
    },
    {
      selector: ".productDeployTourGuideTab2",
      step: 3,
      title: "ProductDeployment",
      content: "ProductDeloyementTab",
    },
  ],
};

// touritem["AssetCatalog/ViewInTransitItems"] = {
//   ModuleDisplayName: "Asset Management",
//   ModuleName: "Asset",
//   displayName: "InTransit Items",
//   items: [
//     {
//       selector: ".single-action",
//       step: 1,
//       title: "TransitCheck",
//       content: "CheckYourIntransitProductsMovingFromOneLocationToAnother",
//     },
//     {
//       selector: ".fa .fa-check-circle",
//       step: 2,
//       title: "TransitClearance",
//       content: "ApproveRejectProductsThatAreTransit",
//     },
//   ],
// };

touritem["AssetRequisition/AddRequisition"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "AddRequisition",
  items: [
    {
      selector: "#ancsaverequest",
      step: 1,
      title: "CheckOut",
      content: "YouCanRequestProductsIssuesForYourself",
    },
  ],
};
// touritem["AssetAssignment/Index"] = {
//   ModuleDisplayName: "Asset Management",
//   ModuleName: "Asset",
//   displayName: "Item Assignment",
//   items: [
//     {
//       selector: "#accordionEx",
//       step: 1,
//       title: "SearchFilters",
//       content: "FindAssignedProductUsingTheDefaultFilters",
//     },
//     {
//       selector: "#ancCreateJob",
//       step: 2,
//       title: "AssignItem",
//       content: "AssignProductsEmployeeReturnProductsFromOneSingleScreen",
//     },
//   ],
// };
touritem["AssetAssignment/Add"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Add Asset Assignment",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "ProductSelectionAssignment",
      content: "SelectProductEnterRequiredInformationAssignProduct",
    },
  ],
};
touritem["AssetRequisition/NewAssetRequisitionListing"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "New Asset Requistion",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchThroughRaisedProductRequests",
    },
    {
      selector: ".aViewRequisition",
      step: 2,
      title: "RequestView",
      content: "ViewYourRequestDetailsComments",
    },
    {
      selector: "#ancCreateJob",
      step: 3,
      title: "ProductRequest",
      content: "RequesNewPproductsByAddingYouRequest",
    },
  ],
};
touritem["AssetRequisition/AddNewRequisition"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Add New Requisition",
  items: [
    {
      selector: "#main-content",
      step: 1,
      title: "EnterDescription",
      content: "NameProductAndDescribeIt",
    },
  ],
};

touritem["Asset/rfidassetlisting"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Rfid Asset Listing",
  items: [
    {
      selector: ".theme-primary",
      step: 1,
      title: "WarehousManagement",
      content:
        "ViewRFIDEnabledAssetListTheirDetailsLikeLocationCodeScanHistoryAndMuchMore",
    },
  ],
};
touritem["Asset/ItemsScanSummary"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Items Scan Summary",
  items: [
    {
      selector: ".row .mt-0",
      step: 1,
      title: "ScanTagsAndAssignProduct",
      content: "CheckScannedTagsAssignProductTag",
    },
  ],
};
touritem["Asset/ScannedItems"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Scanned Items",
  items: [
    {
      selector: "#tblMyRequisitions",
      step: 1,
      title: "ViewScannedTags",
      content: "ViewScannedTags",
    },
  ],
};
touritem["Asset/RFIDMissingAssets"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "RFID Missing Assets",
  items: [
    {
      selector: ".p-name .text-white",
      step: 1,
      title: "ViewScannedTags",
      content: "ViewRFIDEnabledAssetMissingAndUnlocated",
    },
  ],
};
touritem["File/Dashboard"] = {
  ModuleDisplayName: "Doc Storage",
  ModuleName: "UserStorage",
  displayName: "File",
  items: [
    {
      selector: ".dashbord-widget",
      step: 1,
      title: "Widgets",
      content: "ViewSummaryYourStorageConsumptionRightDashboardScreen",
    },
    {
      selector: "#main",
      step: 2,
      title: "FolderListing",
      content: "VieListPersonalFoldersUnderSpaceSharedFolderUnderSharedListing",
    },
    {
      selector: "#headingOne1",
      step: 3,
      title: "FolderManagement",
      content: "AddEditDeleteFoldersDashboardScreen",
    },
    {
      selector: "#plFileList_browse",
      step: 4,
      title: "UploadingFiles",
      content: "UploadOneMultipleFilesOnce",
    },
    {
      selector: "#a_changeView",
      step: 4,
      title: "MultiView",
      content: "SwitchListToCardViewSingleClick",
    },
    {
      selector: ".aDeleteAll .aMoveAll .aCopyAll .aDownloadAll",
      step: 4,
      title: "FileManagement",
      content: "CopyOrMoveFilesFromOneFolderToAnother",
    },
  ],
};
touritem["HR/CandidateList"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "CandidateList",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchYourExpensesUsingTheSearchFilters",
    },
    {
      selector: "#accordionEx",
      step: 2,
      title: "JobOffers",
      content: "MakeOfferCandidateMuchMoreOptions",
    },
    {
      selector: ".p-action-btn",
      step: 3,
      title: "AddNewCandidate ",
      content: "AddNewCandidateExistingListCandidates",
    },
  ],
};
touritem["HR/ManageCandidate"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "ManageCandidate",
  items: [
    {
      selector: "#tourguide",
      step: 1,
      title: "AddNewCandidate",
      content: "FillTheNecessaryInformationAndCandidateAddedTheList",
    },
  ],
};
touritem["JobPost/JobListing"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "JobListing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchForJobPostedUsingPredefinedFiltersAvailable",
    },
    {
      selector: ".p-action-btn",
      step: 2,
      title: "AddNewJob",
      content: "AddPublishNewJobCandidatesToApply",
    },
  ],
};
touritem["JobPost/ManageJob"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "ManageJob",
  items: [
    {
      selector: "#JobSave",
      step: 1,
      title: "AddNewJob",
      content: "FillNecessaryInformationUploadPerYourChoice",
    },
  ],
};
touritem["JobPost/RequisitionList"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Job Requisition",
  items: [
    {
      selector: "#ancCreateJob",
      step: 1,
      title: "JobRequisition",
      content: "ManageRequisitionYourOrganization",
    },
  ],
};
touritem["JobPost/AddRequisition"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Add Requisition",
  items: [
    {
      selector: ".btn-success",
      step: 1,
      title: "AddJobRequisition",
      content: "CreateNewRequisitionYourOrganization",
    },
  ],
};
touritem["HR/ConsultantList"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Consultant List",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "ManageConsultants",
      content: "SearchForTheDesiredConsultantsPredefinedFiltersAvailable",
    },
  ],
};
touritem["VendorUser/AddConsultant"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Add Consultant",
  items: [
    {
      selector: "#divJobPostAdd",
      step: 1,
      title: "AddConsultant",
      content: "AddConsultantsPerTheRequirementsYourOrganization",
    },
  ],
};
touritem["ExitPolicy/EmployeeExitListing"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "EmployeeExitListing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "ManageOffboardedEmployee",
      content: "SearchOffBoardedEmployeeOrganizationPredefinedFilters",
    },
    {
      selector: ".p-action-btn",
      step: 2,
      title: "AddOffboardedEmployee",
      content: "AddOffboardedEmployeeOfOrganization",
    },
  ],
};
touritem["ExitPolicy/EmployeeExit"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "EmployeeExit",
  items: [
    {
      selector: "#SaveArticle",
      step: 1,
      title: "ManageOffboardedEmployee",
      content: "AddNecessaryDetailsEmployeeOffboardListOrganization",
    },
    {
      selector: ".p-action-btn .text-white",
      step: 2,
      title: "AddOffboardedEmployee",
      content: "AddOffboardedEmployeeOfOrganization",
    },
  ],
};
touritem["Policy/policylisting"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Policy Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "ManageCompanyPolicy",
      content: "CheckManagePoliciesOrganization",
    },
    {
      selector: "#addPolicy",
      step: 2,
      title: "AddCompanyPolicy",
      content: "AddDesiredCompanyPolicy",
    },
  ],
};
touritem["Policy/AddPolicy"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Manage Policy",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "AddCompanyPolicy",
      content: "AddImportantDetailsPolicyAdded",
    },
    {
      selector: "#addPolicy",
      step: 2,
      title: "AddCompanyPolicy",
      content: "AddDesiredCompanyPolicy",
    },
  ],
};
touritem["ExitPolicy/EmployeeResignationList"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Resignations",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "ManageResignation",
      content: "CheckAndTrackResignationAtagesAnEmployee",
    },
    {
      selector: "#addPolicy",
      step: 2,
      title: "AddCompanyPolicy",
      content: "AddDesiredCompanyPolicy",
    },
  ],
};
var tourData = [];
var touritem = {};

touritem["User/Dashboard"] = {
  ModuleDisplayName: "Company Setup",
  ModuleName: "User",
  displayName: "Dashboard",
  items: [
    {
      selector: "div#fullMenuUl",
      step: 1,
      title: "FullMenu",
      content: "FullMenuContent",
    },
    {
      selector: "ul.my-account",
      step: 2,
      title: "ProflieMenu",
      content: "ProflieMenuContent",
    },
    {
      selector: "#DivTimerContent",
      step: 3,
      title: "TimerIcon",
      content: "TimerIconContent",
    },
    {
      selector: "li.wizardnew",
      step: 4,
      title: "WizardIcon",
      content: "WizardIconContent",
    },
    {
      selector: "#anceditMyDashboard",
      step: 5,
      title: "MyShortcuts",
      content: "MyShortcutsContent",
    },
    {
      selector: ".rightsideicon",
      step: 6,
      title: "MyShortcutsCustom",
      content: "MyShortcutsContent",
    },
    {
      selector: "#ancAddGroupMyDashboard",
      step: 7,
      title: "AddNewGroup",
      content: "AddNewGroupContent",
    },
    {
      selector: ".clsdashboardgroup ul.shortcuts-menu li:first-child",
      step: 8,
      title: "ShortcutLink",
      marked: true,
      content: "ShortcutLinkContent",
    },
  ],
};

// touritem["User/Home"] = {
//   ModuleDisplayName: "Company Setup",
//   ModuleName: "User",
//   displayName: "Home",
//   items: [
//     {
//       selector: "#headingOne1",
//       step: 1,
//       title: "Inbox",
//       content: "InboxContent",
//     },
//     {
//       selector: "#headingTwo2",
//       step: 2,
//       title: "Activities",
//       content: "ActivitiesContent",
//     },
//     {
//       selector: "#headingThree2",
//       step: 3,
//       title: "Bookmarks",
//       content: "Bookmarks",
//     },
//     {
//       selector: "#divInboxSibling",
//       step: 4,
//       title: "Reports",
//       content: "ReportsContent",
//     },
//     {
//       selector: "#hlkAddMoreReports",
//       step: 5,
//       title: "AddMore",
//       content: "AddMoreContent",
//     },
//   ],
// };
touritem["Project/Index"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Project",
  items: [
    //{
    //    selector: "li.three_wid",
    //    step: 1,
    //    title: "Widgets",
    //    content: "SummaryWidgets"
    //},
    {
      selector: "#accordionEx",
      step: 1,
      title: "Filters",
      content: "SearchMultipleFiltersProject",
    },
  ],
};
touritem["CRM/Index"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Lead",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchLeadFilterContent",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 2,
      title: "Status" + " " + "Update",
      content: "UpdateLeadStatusContent",
    },
    {
      selector: "#addLead_a",
      step: 3,
      title: "AddLead",
      content: "AddLeadContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewLeadContent",
    },
  ],
};
touritem["CRM/LeadList"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Lead List",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchLeadFilterContent",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 2,
      title: "Status" + " " + "Update",
      content: "UpdateLeadStatusContent",
    },
    {
      selector: "#addLead_a",
      step: 3,
      title: "AddLead",
      content: "AddLeadContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewLeadContent",
    },
  ],
};
touritem["Expenses/Index"] = {
  ModuleDisplayName: "Expense Module",
  ModuleName: "Expenses",
  displayName: "Expenses",
  items: [
    {
      selector: ".ExpenseData_LeftMenu",
      step: 1,
      title: "SearchFilters",
      content: "SearchFiltersContent",
    },
    {
      selector: ".addExpense_Span",
      step: 2,
      title: "AddExpenses",
      content: "AddExpensesContent",
    },
    {
      selector: "#aCommanApproval",
      step: 4,
      title: "SendExpense",
      content: "SendExpenseContent",
    },
  ],
};
touritem["Expenses/Add"] = {
  ModuleDisplayName: "Expense Module",
  ModuleName: "Expenses",
  displayName: "Add Expense",
  items: [
    {
      selector: "#aSendForApproval",
      step: 1,
      title: "ExpenseAdd",
      content: "ExpenseAddContent",
    },
  ],
};
touritem["Expenses/Import"] = {
  ModuleDisplayName: "Expense Module",
  ModuleName: "Expenses",
  displayName: "Import Expense",
  items: [
    {
      selector: ".downloadExpense",
      step: 1,
      title: "SampleFile",
      content: "SampleFileContent",
    },
    {
      selector: ".expenseFile",
      step: 2,
      title: "ChooseExpenseFile",
      content: "ChooseExpenseFileContent",
    },
    {
      selector: "#aSubmit",
      step: 3,
      title: "VerifyExpenseDetails",
      content: "CongratsYouHaveUploadedTheExpensesBulkSuccessfully",
    },
  ],
};
touritem["Expenses/BulkUpload"] = {
  ModuleDisplayName: "Expense Module",
  ModuleName: "Expenses",
  displayName: "Bulk Upload Expense",
  items: [
    {
      selector: "#aValidate",
      step: 1,
      title: "ExpenseDetails",
      content: "ExpenseDetailsContent",
    },
  ],
};
touritem["ExpenseApproval/Index"] = {
  ModuleDisplayName: "Expense Module",
  ModuleName: "Expenses",
  displayName: "Expense Approval",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchFiltersContent",
    },
    {
      selector: "#hlkApprove",
      step: 2,
      title: "approveExpense",
      content: "approveExpenseContent",
    },
    {
      selector: "#hlkReject",
      step: 3,
      title: "RejectExpense",
      content: "RejectExpenseContent",
    },
  ],
};

touritem["Training/Index"] = {
  ModuleDisplayName: "Training",
  ModuleName: "Training",
  displayName: "Training",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "Search your trainings using the search filters.",
    },
    {
      selector: ".fa fa-eye",
      step: 2,
      title: "KnowYourTraining",
      content: "ViewEditDetailsTrainingLikeAttendanceFeedbackDaysMore",
    },
  ],
};
touritem["Training/Add"] = {
  ModuleDisplayName: "Training",
  ModuleName: "Training",
  displayName: "Add Training",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "TrainingSetup",
      content: "AddRequiredDetailsLikeVenueAndSetupYourTrainingSession",
    },
    {
      selector: "#ancCreateTraining",
      step: 2,
      title: "AddTraining",
      content: "AddTrainingContent",
    },
  ],
};
touritem["Training/Trainingview"] = {
  ModuleDisplayName: "Training",
  ModuleName: "Training",
  displayName: "Training View",
  items: [
    {
      selector: ".responivecustomtab",
      step: 1,
      title: "ManageTraining",
      content: "SetupQuestionnaireAddAttachmentsTraining",
    },
  ],
};
touritem["HR/LeaveList"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Leave List",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkHRLeaveSearchContent",
    },
    {
      selector: ".WalkHRLeaveWidgetContent_ul",
      step: 2,
      title: "Widgets",
      content: "WalkHRLeaveWidgetContent",
    },
    {
      selector: ".leaveaction_span .applyleave",
      step: 3,
      title: "AddLeave",
      content: "ApplyForLeaveAndSendItForApproval",
    },
  ],
};
touritem["HR/LeaveTypeListing"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "LeaveType Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkHRLeaveTypeSearchContent",
    },
    {
      selector: ".addLeaveType_a",
      step: 2,
      title: "Add" + " " + "Leave" + " " + "Type",
      content: "WalkHRLeaveTypeAddContent",
    },
  ],
};
touritem["HR/Leave"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Leave Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "LeaveApplication",
      content: "ViewYourLeaveBalanceWhileApplyingYourLeave.",
    },
    {
      selector: ".addLeaveType_a",
      step: 2,
      title: "Add" + " " + "Leave" + " " + "Type",
      content: "WalkHRLeaveTypeAddContent",
    },
  ],
};
touritem["HR/index"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "HR",
  items: [
    {
      selector: "#txtLeaveType",
      step: 1,
      title: "Add" + " " + "Leave" + " " + "Type",
      content: "WalkHRLeaveTypeAddPageContent",
    },
  ],
};
touritem["LeaveApproval/Index"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Leave Approval",
  items: [
    //{
    //    selector: "#accordionEx",
    //    step: 1,
    //    title: "Search" + " " + "Filters",
    //    content: "LeaveApproveRejectSearchContent"
    //},
    //{
    //    selector: ".LeaveApproveRejectContent_span",
    //    step: 2,
    //    title: "Approve" + " " + "And" + " " + "Reject",
    //    content: "LeaveApproveRejectContent"
    //}
  ],
};
touritem["CRM/ManageLead"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Manage Lead",
  items: [
    {
      selector: ".AddLeadDetail_a",
      step: 1,
      title: "enter" + " " + "LeadDetail",
      content: "AddLeadDetailContent",
    },
  ],
};
touritem["CRM/DealListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Deal Listing",
  items: [
    {
      selector: "#titleName",
      step: 1,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "DealFiltersContent",
    },
    {
      selector: "#ChangeOwnerId",
      step: 5,
      title: "ChangeDealOwner",
      content: "ChangeDealOwnerContent",
    },
    {
      selector: "#AdditionalOwnerId",
      step: 6,
      title: "AdditionalOwner",
      content: "AdditionalOwnerContent",
    },
    {
      selector: "#action-list",
      step: 7,
      title: "actionButton",
      content: "actionButtonContent",
    },
  ],
};
touritem["CRM/ViewDealDetails"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "View Deal Details",
  items: [
    {
      selector: ".div-click-event",
      step: 1,
      title: "Deal" + " " + "Management",
      content: "ManageDealContent",
    },
    {
      selector: ".wizard",
      step: 2,
      title: "Deal" + " " + "Stages",
      content: "ManageDealStageContent",
    },
  ],
};
touritem["CRM/ManageAccount"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Manage Account",
  items: [
    {
      selector: ".formbtn",
      step: 1,
      title: "AddAccount",
      content: "AddAccountDetailContent",
    },
  ],
};
touritem["CRM/ManageAccountEdit"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Manage Account",
  items: [
    {
      selector: ".formbtn",
      step: 1,
      title: "EditAccount",
      content: "UpdateAccountDetailContent",
    },
  ],
};

touritem["CRM/ItemTypeListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Item Type Listing",
  items: [
    {
      selector: ".additean_a",
      step: 1,
      title: "AddItemType",
      content: "AddItemTypeContent",
    },
    {
      selector: ".divUseSequence_a",
      step: 2,
      title: "SearchFilters",
      content: "SearchItemTypeFilterContent",
    },
    {
      selector: ".tourguide_a",
      step: 3,
      title: "View" + " " + "Detail",
      content: "ViewItemtypeDetailContent",
    },
    {
      selector: ".tourguide_aa",
      step: 4,
      title: "Edit" + " " + "Detail",
      content: "EditItemtypeContent",
    },
  ],
};
touritem["CRM/PurchaseOrderListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Purchase Order Listing",
  items: [
    {
      selector: "#titleName",
      step: 1,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: "#action-list",
      step: 4,
      title: "actionButton",
      content: "actionButtonContent",
    },
  ],
};
touritem["CRM/QuotationListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Quote Listing",
  items: [
    {
      selector: "#titleName",
      step: 1,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "ProductFiltersContent",
    },
    {
      selector: "#action-list",
      step: 4,
      title: "actionButton",
      content: "actionButtonContent",
    },
    {
      selector: "#ExportToExcel",
      step: 5,
      title: "ExporttoExcel",
      content: "ExporttoExcelContent",
    },
    {
      selector: "#Sendbulkmail",
      step: 6,
      title: "SendEmail",
      content: "SendEmailQuoteContent",
    },
  ],
};

touritem["CRM/ItemListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Item Listing",
  items: [
    {
      selector: "#titleName",
      step: 1,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "ProductFiltersContent",
    },
    {
      selector: "#crmleftsearch",
      step: 5,
      title: "SearchFilters",
      content: "SearchProductFilterContent",
    },
    {
      selector: "#AddProducts",
      step: 6,
      title: "AddItem",
      content: "AddItemContent",
    },
  ],
};

touritem["Asset/Add"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Add Asset",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "AddAssetType",
      content: "AddAssetTypeContent",
    },
  ],
};
touritem["CRM/SalesOrderListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Sales Order Listing",
  items: [
    {
      selector: ".divSalesOrderkData_search",
      step: 1,
      title: "SearchFilters",
      content: "SearchSaleOrderFilterContent",
    },
    {
      selector: "#AddSaleOrderTitle",
      step: 2,
      title: "AddSaleOrderTitle",
      content: "AddSaleOrderContent",
    },
    {
      selector: ".text-overflow-dynamic-container",
      step: 3,
      title: "ViewDetail",
      content: "ViewSaleOrderContent",
    },
  ],
};
touritem["CRM/ViewSalesOrderDetails"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "View Sales Order Details",
  items: [
    {
      selector: ".div-click-event",
      step: 1,
      title: "Sale" + "" + "Order" + "" + "Activity",
      content: "ViewSaleOrderDetailContent",
    },
  ],
};
touritem["CRM/StageListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Stage Listing",
  items: [
    {
      selector: "#titleName",
      step: 1,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "FiltersContent",
    },
  ],
};

touritem["CRM/Accounts"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Accounts",
  items: [
    {
      selector: ".account_widget",
      step: 1,
      title: "Widgets",
      content: "SearchAccountFilterContent",
    },
    {
      selector: ".account_tour",
      step: 2,
      title: "SearchFilters",
      content: "SearchAccountFilter1Content",
    },
    {
      selector: "#ancCreateDepartment",
      step: 3,
      title: "AddAccount",
      content: "AddAccountContent",
    },
    {
      selector: "#dialogAddAccountType",
      step: 4,
      title: "Select" + "" + "Account",
      content: "SelectAccountContent",
    },
  ],
};
touritem["CRM/CampaignListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Campaign Listing",
  items: [
    {
      selector: "#titleName",
      step: 1,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "CampaignFiltersContent",
    },
    {
      selector: "#action-list",
      step: 5,
      title: "actionButton",
      content: "actionButtonContent",
    },
  ],
};
touritem["CRM/InwardListing"] = {
  ModuleDisplayName: "CRM Management",
  displayName: "CRM",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "GoodInwardContent",
    },
    {
      selector: "#ExportToExcel",
      step: 2,
      title: "ExporttoExcel",
      content: "ExporttoExcelContent",
    },
    {
      selector: "#RejectApprove",
      step: 3,
      title: "Approve/Reject",
      content: "RejectApproveContent",
    },
    {
      selector: "#RejectApprove1",
      step: 4,
      title: "Approve/Reject",
      content: "RejectApproveContent",
    },
    {
      selector: "#titleName",
      step: 5,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 6,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 7,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: ".actions",
      step: 8,
      title: "actionButton",
      content: "actionButtonContent",
    },
  ],
};
touritem["CRM/VendorListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Vendor Listing",
  items: [
    {
      selector: "#titleName",
      step: 1,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "ProductFiltersContent",
    },
    {
      selector: "#action-list",
      step: 4,
      title: "actionButton",
      content: "actionButtonContent",
    },
    {
      selector: "#ExportToExcel",
      step: 5,
      title: "ExporttoExcel",
      content: "ExporttoExcelContent",
    },
  ],
};

touritem["CRM/ContactListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Contact Listing",
  items: [
    {
      selector: ".divContactData_a",
      step: 1,
      title: "SearchFilters",
      content: "SearchContactFilterContent",
    },
    {
      selector: ".addcontact_a",
      step: 2,
      title: "AddContact",
      content: "AddContactContent",
    },
  ],
};
touritem["CRM/ContractListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Campaign Listing",
  items: [
    {
      selector: "#titleName",
      step: 1,
      title: "DefaultView",
      content: "DefaultViewContent",
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent",
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "ContractFiltersContent",
    },
    {
      selector: "#action-list",
      step: 5,
      title: "actionButton",
      content: "actionButtonContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 6,
      title: "ViewDetail",
      content: "ViewContractContent",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 7,
      title: "Status" + " " + "Update",
      content: "UpdateLeadStatusContent",
    },
  ],
};
touritem["CRM/ManageCampaign"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Manage Campaign",
  items: [
    {
      selector: ".btn_save_a",
      step: 1,
      title: "enter" + " " + "Campaign" + "" + "Detail",
      content: "AddCampaignDetailContent",
    },
  ],
};
touritem["CRM/ManageContact"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Add Contact",
  items: [
    {
      selector: ".formbtn",
      step: 1,
      title: "ContactDetail",
      content: "AddContactDetailContent",
    },
  ],
};
touritem["CRM/ManageContract"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Add Contract",
  items: [
    {
      selector: ".btn_a",
      step: 1,
      title: "Contract" + "" + "Detail",
      content: "AddContractDetailContent",
    },
  ],
};
touritem["Brand/SocialConnect"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Social Connect",
  items: [
    {
      selector: ".SocialMedia_a",
      step: 1,
      title: "SocialMedia",
      content: "SocialMediaContent",
    },
  ],
};
touritem["Brand/BrandListing"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Brand Listing",
  items: [
    {
      selector: ".SocialMedia_a",
      step: 1,
      title: "Setup" + "" + "New" + "" + "Brand",
      content: "SetupNewBrandContent",
    },
    {
      selector: ".SocialMedia_b",
      step: 2,
      title: "enter" + "" + "Brand" + "" + "Detail",
      content: "AddBrandDetailContent",
    },
    {
      selector: ".SocialMedia_c",
      step: 3,
      title: "Connect",
      content: "ConnectContent",
    },
  ],
};

touritem["JobPost/JobListing"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Job Listing",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "SearchFilters",
      content: "Search" + "" + "Job",
    },
  ],
};
touritem["HR/TalentPoolList"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Talent Pool List",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "SearchFilters",
      content: "Search" + "" + "TalentPool",
    },
  ],
};
touritem["FSM/worktypeListing"] = {
  ModuleDisplayName: "FSM Management",
  ModuleName: "FSM",
  displayName: "FSM work type Listing",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "SearchFilters",
      content: "Search",
    },
  ],
};
touritem["CRM/ViewLeadDetails"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Lead Details",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "Lead" + "" + "Timeline",
      content: "ViewLeadDetailContent",
    },
    {
      selector: ".hr_jobpost_a",
      step: 2,
      title: "Lead" + "" + "Management",
      content: "ManageLeadContent",
    },
    {
      selector: ".hr_jobpost_b",
      step: 3,
      title: "LeadConversionTitle",
      content: "LeadConversionContent",
    },
  ],
};
touritem["Course/Index"] = {
  ModuleDisplayName: "Appointment Calendar",
  ModuleName: "Appointment",
  ModuleName: "Appointment Calendar",
  displayName: "Course Listing",
  items: [
    {
      selector: "#accordionEx .left-filter",
      step: 1,
      title: "SearchCourse",
      content: "CourseAvailableAndSearch",
    },
    {
      selector: "#ancCreateServiceMaster",
      step: 2,
      title: "AddService",
      content: "AddServiceAandScheduleAppointmentForExternal",
    },
  ],
};
touritem["RateSchedule/Index"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "Billing",
  displayName: "RateSchedule Listing",
  items: [
    {
      selector: "#accordionEx .left-filter",
      step: 1,
      title: "ManageAutomation",
      content: "SelectClientAndRuleNameSetupTheCondition ",
    },
    {
      selector: ".ddlupdatestatus",
      step: 2,
      title: "StatusUpdate",
      content: "ChangeBillingRulestatus",
    },
  ],
};

touritem["Client/Index"] = {
  ModuleDisplayName: "Company Setup",
  ModuleName: "User",
  displayName: "Client",
  items: [
    {
      selector: "#accordionEx .left-filter",
      step: 1,
      title: "SearchRule",
      content: "SearchAccountUsingPredefinedSearchFilters ",
    },
    {
      selector: ".actions .action_icon",
      step: 2,
      title: "ManageConfigurations",
      content: "SetupConfigurationTheAccount",
    },
    {
      selector: ".actions .action_icon",
      step: 3,
      title: "EnterTheRequiredInformation",
      content: "SelectRequiredOptionsSetupYouContractSettings",
    },
  ],
};
touritem["Calendar/Calendar"] = {
  ModuleDisplayName: "Event Management",
  ModuleName: "Event",
  displayName: "Calendar",
  items: [
    {
      selector: "#divHeader",
      step: 1,
      title: "PredefinedSearchFilters",
      content:
        "SearchDifferentTypesEventsUsingEventFiltersVisibleYourTalygenCalendar",
    },
    {
      selector: ".actions .action_icon",
      step: 2,
      title: "ManageConfigurations",
      content: "SetupConfigurationTheAccount",
    },
    {
      selector: ".actions .action_icon",
      step: 3,
      title: "EnterTheRequiredInformation",
      content: "SelectRequiredOptionsSetupYouContractSettings",
    },
  ],
};
touritem["Event/AddEvent"] = {
  ModuleDisplayName: "Event Management",
  ModuleName: "Event",
  displayName: "AddEvent",
  items: [
    {
      selector: ".modal-content",
      step: 1,
      title: "CreateEvent",
      content: "AddEventAndInviteFellowTeamMembersOrClientsYourOrganization",
    },
  ],
};
touritem["UserAvailability/Index"] = {
  ModuleDisplayName: "Event Management",
  ModuleName: "Event",
  displayName: "UserAvailability Listing",
  items: [
    {
      selector: "#aCreateCategory",
      step: 1,
      title: "ManageYourAvailability",
      content: "SetupYourAvailabilityStatus",
    },
    {
      selector: "#aCreateCategory",
      step: 2,
      title: "SearchFilters",
      content: "SearchBasedOnTheTitleAndStatusOfTheEventAdded.",
    },
  ],
};
touritem["UserAvailability/Add"] = {
  ModuleDisplayName: "Event Management",
  ModuleName: "Event",
  displayName: "Add User Availability",
  items: [
    {
      selector: ".form-panel",
      step: 1,
      title: "ManageYourAvailability",
      content: "AddTheCreatedEventsToEnsureYouDontMissThem",
    },
  ],
};
// touritem["Review/Main"] = {
//   ModuleDisplayName: "Performance Review",
//   ModuleName: "Review",
//   displayName: "Review Listing",
//   items: [
//     {
//       selector: ".responivecustomtab",
//       step: 1,
//       title: "PerformanceManagement",
//       content: "SetupSkillsAndAddNotesForEmployeesFromSingleScreen",
//     },
//     {
//       selector: "#amyteam",
//       step: 3,
//       title: "UserSelection",
//       content:
//         "AddNotesCheckTheSkillsSelectingTheUserFromYourTeamAsPerYourRequirement",
//     },
//   ],
// };
touritem["Review/ReviewListingForReviewer"] = {
  ModuleDisplayName: "Performance Review",
  ModuleName: "Review",
  displayName: "Review Listing For Reviewer",
  items: [
    {
      selector: ".responivecustomtab",
      step: 1,
      title: "StartReview",
      content: "ClickOnTheReviewNameToStartTheReview",
    },
  ],
};

touritem["Feedback/UserFeedbackListing"] = {
  ModuleDisplayName: "Performance Review",
  ModuleName: "Review",
  displayName: "User Feedback Listing",
  items: [
    {
      selector: ".p-name text-white",
      step: 1,
      title: "ProvideFeedback",
      content: "SubmitTheFeedbackForTheUserBasedOnThePerformance",
    },
  ],
};
touritem["Ticketing/Index"] = {
  ModuleDisplayName: "Ticketing",
  ModuleName: "Ticketing",
  displayName: "Ticket Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search Filters",
      content: "SearchFiltersPageTour",
    },
    {
      selector: ".right-content .dashbord-widget",
      step: 2,
      title: "Widgets",
      content: "WidgetsPageTour",
    },
    {
      selector: "#ddlUserCurrentStatus",
      step: 3,
      title: "User Status",
      content: "UserStatusPageTour",
    },
    {
      selector: "#Addticketing",
      step: 4,
      title: "Add Ticket",
      content: "AddTicketPageTour",
    },
    {
      selector: ".actions .mobileaction .viewTicket",
      step: 5,
      title: "View Ticket",
      content: "ViewTicket",
    },
  ],
};
touritem["Ticketing/add"] = {
  ModuleDisplayName: "Ticketing",
  ModuleName: "Ticketing",
  displayName: "Add Ticket",
  items: [
    {
      selector: ".ancsavedraftticket",
      step: 1,
      title: "Save as Draft or Submit",
      content: "SaveAsDraftOrSubmit",
    },    
  ],
};

touritem["Ticketing/Manage"] = {
  ModuleDisplayName: "Ticketing",
  ModuleName: "Ticketing",
  displayName: "Details",
  items: [
    {
      selector: "#UpdateDetail",
      step: 1,
      title: "Status Update",
      content: "StatusUpdatePageTour",
    },
    {
      selector: "#MergeDetail",
      step: 2,
      title: "Split & Merge",
      content: "SplitMerge",
    },
    {
      selector: "#tabscontentTicketDetails #postReplyNote",
      step: 3,
      title: "Add Notes & Post Reply",
      content: "AddNotesPostReply",
    },
  ],
};

touritem["Ticketing/Group"] = {
  ModuleDisplayName: "Ticketing",
  ModuleName: "Ticketing",
  displayName: "Group Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search Filters",
      content: "SearchFiltersPageTour",
    },
    {
      selector: "#AddGroup",
      step: 2,
      title: "Add Group",
      content: "AddGroupPageTour",
    },
  ],
};

touritem["Ticketing/AddGroup"] = {
  ModuleDisplayName: "Ticketing",
  ModuleName: "Ticketing",
  displayName: "Add Group",
  items: [
    {
      selector: "#addGroupRecord",
      step: 1,
      title: "Choose Department & User",
      content: "ChooseDepartmentUser",
    },
  ],
};

touritem["Ticketing/Chain"] = {
  ModuleDisplayName: "Ticketing",
  ModuleName: "Ticketing",
  displayName: "Ticket Service Board",
  items: [
    {
      selector: "#AddGroup",
      step: 1,
      title: "New Ticket Service Board",
      content: "NewTicketServiceBoard",
    },
  ],
};

touritem["Ticketing/AddChain"] = {
  ModuleDisplayName: "Ticketing",
  ModuleName: "Ticketing",
  displayName: "Add ServiceBoard",
  items: [
    {
      selector: "#addChainRecord",
      step: 1,
      title: "New Ticket Service Board",
      content: "NewTicketServiceBoard",
    },
  ],
};

touritem["Ticketing/Policy"] = {
  ModuleDisplayName: "Ticketing",
  ModuleName: "Ticketing",
  displayName: "Ticketing Policy",
  items: [
    {
      selector: "#AddPolicy",
      step: 1,
      title: "Service Level Agreement",
      content: "ServiceLevelAgreement",
    },
  ],
};

touritem["Ticketing/AddPolicy"] = {
  ModuleDisplayName: "Ticketing",
  ModuleName: "Ticketing",
  displayName: "Add policy",
  items: [
    {
      selector: "#AddPolicyRecord",
      step: 1,
      title: "SLA Policy",
      content: "SLAPolicy",
    },
  ],
};
touritem["Timer/Index"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Timer",
  items: [
    {
      selector: ".chkbillable",
      step: 1,
      title: "AutomaticTimeTracking",
      content:
        "StartBillableNonbillableAutomaticTimetrackingProjectAndTaskWorking",
    },
    {
      selector: "#AddManually",
      step: 2,
      title: "ManualTimeTracking",
      content: "SaveYourPastEntriesProjectYouWorkedOn",
    },
    {
      selector: "#ShowCalender",
      step: 3,
      title: "ViewSavedTimeEntries",
      content: "DetailedViewYourTimeEntries.",
    },
    {
      selector: ".continuetimer",
      step: 4,
      title: "ContinueTimeEntry",
      content: "ContinuePreviousTimeEntryWorkingSameProjectAndTask.",
    },
    {
      selector: "#header-Graph",
      step: 5,
      title: "Reports",
      content: "ViewGraphicalReportsYourAndYourTeamTimeEntries",
    },
  ],
};
touritem["Timer/BulkTimeEntry"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "BulkTimeEntry",
  items: [
    {
      selector: "#aFillTimeEntry",
      step: 1,
      title: "FillTimeEntry",
      content: "EnterTimeEntryDetailsYourEmployees",
    },
    {
      selector: "#aAddnewLine",
      step: 2,
      title: "BulkTimeEntry",
      content: "AddMultipleTimeEntriesForMultipleEmployeesInOneGo",
    },
    {
      selector: "#btnSave",
      step: 3,
      title: "SaveTheDetails",
      content: "CongratsYouhaveSuccessfullySavedBulkTimeEntries.",
    },
  ],
};
touritem["Timesheet/Index"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Timesheet",
  items: [
    {
      selector: "#week-picker",
      step: 1,
      title: "ViewWeeklyTimesheet",
      content: "SelectWeekAndTheUserToViewTheWeeklyTimesheet",
    },
    {
      selector: ".aAddHours",
      step: 2,
      title: "AddHours",
      content: " AddNumberHoursSpentProjectAndTask",
    },
    {
      selector: "#btnSendForApproval",
      step: 2,
      title: "SendForApproval",
      content: "CongratsYouHaveSubmittedTimesheetForApproval",
    },
  ],
};
touritem["Timesheet/Add"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Timesheet Add",
  items: [
    {
      selector: ".modal-dialog",
      step: 1,
      title: "EnterTimesheetDetails",
      content: "EnterTheTimesheetDetailsForWeekDays",
    },
    {
      selector: ".aAddHours",
      step: 2,
      title: "AddHours",
      content: " AddNumberHoursSpentProjectAndTask",
    },
  ],
};
touritem["TimesheetApproval/Index"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Timesheet Approval",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchTimesheetsUsingSearchFilters",
    },
    {
      selector: ".aDetail",
      step: 2,
      title: "ViewTimesheetDetails",
      content: "ViewDetailedInformationOfTheTimesheet",
    },
    {
      selector: "#divApprove",
      step: 3,
      title: "ApproveTimesheet",
      content: "ApproveSingleOrMultipleTimesheetsInOneGo",
    },
    {
      selector: "aReject",
      step: 4,
      title: "RejectTimesheet",
      content: "RejectSingleMultipleTimesheetsOneGoAndCommentDownTheReason",
    },
  ],
};
touritem["Timer/TrackEntryFlag"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "TrackEntry Flag",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchTheTimeEntries",
    },
  ],
};
touritem["WorkDiary/Index"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Work Diary Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content:
        "SearchScreenshotsScreenVideoRecordingTheUserUsingTheSearchFilters",
    },
    {
      selector: "#divapplicationdata",
      step: 2,
      title: "ApplicationTime",
      content: "MonitorTimeSpentTheUserParticularApplication.",
    },
    {
      selector: ".viewdetails",
      step: 3,
      title: "MouseClicksKeystrokesDetails",
      content: "ViewDetailedInformationActivitiesTheUser",
    },
  ],
};
touritem["File/Dashboard"] = {
  ModuleDisplayName: "Doc Storage",
  ModuleName: "UserStorage",
  displayName: "File",
  items: [
    {
      selector: "#leftmenutree",
      step: 1,
      title: "Files/Folder Library",
      content: "VieListPersonalFoldersUnderSpaceSharedFolderUnderSharedListing",
    },
    {
      selector: "#aShareFolder",
      step: 2,
      title: "Recycle Bin",
      content: "RecycleBin",
    },
    {
      selector: "#View",
      step: 3,
      title: "Card View",
      content: "DashbaordCardView",
    },
    {
      selector: "#a_changeView",
      step: 4,
      title: "List View",
      content: "DashbaordListView ",
    },
    {
      selector: ".aDeleteAll .aMoveAll .aCopyAll .aDownloadAll",
      step: 5,
      title: "FileManagement",
      content: "CopyOrMoveFilesFromOneFolderToAnother",
    },
  ],
};
touritem["Asset/Dashboard"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Dashboard",
  items: [
    {
      selector: "#aDateLable_global",
      step: 1,
      title: "DateSelection",
      content: "SelectYourDateViewReports",
    },
    {
      selector: "#hlkAddMoreReports",
      step: 2,
      title: "AddReport",
      content: "AddMoreReports",
    },
  ],
};
touritem["AssetCatalog/Index"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Asset Catalog Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchYourProductsUsingFilters",
    },
    {
      selector: "#titleName",
      step: 2,
      title: "Default View",
      content: "DefaultView",
    },

    {
      selector: "#manageViewbutton",
      step: 3,
      title: "Manage View",
      content: "ManageViewSteps",
    },

    {
      selector: "#addManageView",
      step: 4,
      title: "Add New",
      content: "AddMangeView",
    },

    {
      selector: "#manageProductFilter",
      step: 5,
      title: "Filters",
      content: "FiltersProudctAssignment",
    },

    {
      selector: "#productlist",
      step: 6,
      title: "Product List",
      content: "ProductList",
    },

    {
      selector: "#addRelationship",
      step: 7,
      title: "Add Relationship",
      content: "AddRelationship",
    },
    {
      selector: "#checkAvailability",
      step: 8,
      title: "Check Availability",
      content: "CheckAvailability",
    },
    {
      selector: "#Addproduct",
      step: 9,
      title: "Add Product",
      content: "AddProduct",
    },
    {
      selector: "#inTransitProducts",
      step: 10,
      title: "In-Transit Products",
      content: "InTransitProducts",
    },

    {
      selector: "#deprectiation",
      step: 11,
      title: "Depreciation",
      content: "DepreciationStep",
    },
    {
      selector: "#importProduct",
      step: 12,
      title: "Import Products",
      content: "ImportProducts",
    },
    {
      selector: "#relatedProduct",
      step: 13,
      title: "Related Products",
      content: "RelatedProducts",
    },
    {
      selector: ".action-list-box is-visible",
      step: 14,
      title: "Action Button",
      content: "ManageProductAction",
    },
  ],
};

touritem["AssetCatalog/RelatedInformation"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Product List",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchYourProductsUsingFilters",
    },
    {
      selector: "#titleName",
      step: 2,
      title: "Default View",
      content: "DefaultView",
    },

    {
      selector: "#manageViewbutton",
      step: 3,
      title: "Manage View",
      content: "ManageViewSteps",
    },

    {
      selector: "#addManageView",
      step: 4,
      title: "Add New",
      content: "AddMangeView",
    },

    {
      selector: "#relatedFilter",
      step: 5,
      title: "Filters",
      content: "FiltersProudctAssignment",
    },

    {
      selector: "#addProduct",
      step: 6,
      title: "Add Product",
      content: "RelatedAddProduct",
    },

    {
      selector: "#deployProductRelated",
      step: 7,
      title: "Deploy Product",
      content: "DeployProduct",
    },

    {
      selector: "#DeployMentType",
      step: 8,
      title: "Add Deploy Product",
      content: "AddDeployProduct",
    },
    {
      selector: "#barcode",
      step: 9,
      title: "Barcode",
      content: "RelatedBarcode",
    },

    {
      selector: "#barcodePrint",
      step: 10,
      title: "Barcode Print",
      content: "RelatedBarcodePrint",
    },

    {
      selector: "#backtolist",
      step: 11,
      title: "Back to List",
      content: "RelatedBacktoList",
    },
  ],
};

touritem["AssetCatalog/TransferItem"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Product Transfer",
  items: [
    // {
    //   selector: ".Search-panel",
    //   step: 1,
    //   title: "AssetTransfer",
    //   content: "TransferProductsFromOneLocationToAnother",
    // },
    {
      selector: "#searchProductTransfer",
      step: 1,
      title: "Product Transfer",
      content: "ProductTransferDetail",
    },

    {
      selector: "#addProdcutMoveList",
      step: 2,
      title: "Product Move to List",
      content: "ProductMovetoList",
    },
  ],
};

touritem["AssetCatalog/ViewInTransitItems"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "In-Transit List",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "In-Transit List",
      content: "InTransitListStep",
    },
    {
      selector: "#AcceptReject",
      step: 2,
      title: "Accept/Reject",
      content: "AcceptandReject",
    },
    {
      selector: "#transferredList",
      step: 3,
      title: "Transferred List",
      content: "TransferredList",
    },
    {
      selector: "#backtolist",
      step: 4,
      title: "Back to List",
      content: "TransferredBacktoList",
    },
    {
      selector: "#comment",
      step: 5,
      title: "Comment",
      content: "InTransitComment",
    },
  ],
};

touritem["AssetCatalog/Add"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Asset Catalog Add",
  items: [
    {
      selector: ".productCreateTab1",
      step: 1,
      title: "EnterProductDetails",
      content: "SelectProductTypeFillRequiredDetails",
    },
    {
      selector: "#ancDeployItems",
      step: 2,
      title: "AddAssetCatalogue",
      content: "AddNewProductYourProductCatalogue",
    },
    {
      selector: ".productDeployTourGuideTab2",
      step: 3,
      title: "ProductDeployment",
      content: "ProductDeloyementTab",
    },
  ],
};
// touritem["AssetCatalog/TransferItem"] = {
//   ModuleDisplayName: "Asset Management",
//   ModuleName: "Asset",
//   displayName: "Item Transfer",
//   items: [
//     {
//       selector: ".Search-panel",
//       step: 1,
//       title: "AssetTransfer",
//       content: "TransferProductsFromOneLocationToAnother",
//     },
//   ],
// };
// touritem["AssetCatalog/ViewInTransitItems"] = {
//   ModuleDisplayName: "Asset Management",
//   ModuleName: "Asset",
//   displayName: "InTransit Items",
//   items: [
//     {
//       selector: ".single-action",
//       step: 1,
//       title: "TransitCheck",
//       content: "CheckYourIntransitProductsMovingFromOneLocationToAnother",
//     },
//     {
//       selector: ".fa .fa-check-circle",
//       step: 2,
//       title: "TransitClearance",
//       content: "ApproveRejectProductsThatAreTransit",
//     },
//   ],
// };

touritem["Asset/MyItems"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "My Items",
  items: [
    // {
    //   selector: "#ancaddgroupRequisitions",
    //   step: 1,
    //   title: "GetYourProduct",
    //   content: "YouCanRequestProductsIssuesForYourself",
    // },
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search Filters",
      content: "MyproductFilter",
    },
    {
      selector: "#myProductCheckAvailability",
      step: 2,
      title: "Check Availability",
      content: "CheckAvailabilityMyProduct",
    },
    {
      selector: "#selfAssignmentMyProduct",
      step: 3,
      title: "Self Assignment",
      content: "SelfAssignmentMyProduct",
    },
    {
      selector: "#checkOutList",
      step: 4,
      title: "Check Out Request List",
      content: "CheckOutRequestList",
    },
    {
      selector: "#AddCheckOutRequest",
      step: 5,
      title: "Add Check Out Request",
      content: "AddCheckOutRequestAllow",
    },
  ],
};

touritem["AssetRequisition/MyRequisitions"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Check-Out List",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search Filters",
      content: "SearchFilter",
    },

    {
      selector: "#rejectCheckoutRequest",
      step: 2,
      title: "Reject",
      content: "RejectCheckoutProduct",
    },

    {
      selector: "#addCheckoutRequest",
      step: 3,
      title: "Add Check out Request",
      content: "AddCheckOutRequestAllow",
    },
  ],
};

touritem["AssetAssignment/CheckOut"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Check-Out List",
  items: [
    {
      selector: "#addProduct",
      step: 1,
      title: "Add Products",
      content: "AddProductsCheckout",
    },
  ],
};

// touritem["AssetAssignment/CheckOut"] = {
//   ModuleDisplayName: "Asset Management",
//   ModuleName: "Asset",
//   displayName: "Check-Out List",
//   items: [

//     {
//       selector: "#addProduct",
//       step: 1,
//       title: "Add Products",
//       content: "AddProductsCheckout",
//     },

//       {
//       selector: "#accordionEx",
//       step: 2,
//       title: "Search Filters",
//       content: "SearchFilter",
//     },

//   ],
// };

touritem["AssetRequisition/AddRequisition"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "AddRequisition",
  items: [
    {
      selector: "#ancsaverequest",
      step: 1,
      title: "CheckOut",
      content: "YouCanRequestProductsIssuesForYourself",
    },
  ],
};

touritem["AssetAssignment/Index"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Item Assignment",

  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search Filters",
      content: "FindAssignedProductUsingTheDefaultFilters",
    },

    // {
    //   selector: "#ancCreateJob",
    //   step: 2,
    //   title: "AssignItem",
    //   content: "AssignProductsEmployeeReturnProductsFromOneSingleScreen",
    // },
    {
      selector: "#titleName",
      step: 2,
      title: "Default View",
      content: "DefaultView",
    },

    {
      selector: "#manageViewbutton",
      step: 3,
      title: "Manage View",
      content: "ManageViewSteps",
    },

    {
      selector: "#addManageView",
      step: 4,
      title: "Add New",
      content: "AddMangeView",
    },

    {
      selector: "#filterProductAssingment",
      step: 5,
      title: "Filters",
      content: "FiltersProudctAssignment",
    },

    {
      selector: "#returnProduct",
      step: 6,
      title: "Return Product",
      content: "ReturnProduct",
    },

    {
      selector: "#requestforReturn",
      step: 7,
      title: "Request for Return",
      content: "RequestforReturn",
    },

    {
      selector: ".action-list-box",
      step: 8,
      title: "Action Button",
      content: "ActionButton",
    },
  ],
};

touritem["AssetAssignment/Add"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Add Asset Assignment",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "ProductSelectionAssignment",
      content: "SelectProductEnterRequiredInformationAssignProduct",
    },
  ],
};

touritem["Asset/Index"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Product Type",

  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search Filter",
      content: "SearchFilterProductType",
    },

    {
      selector: "#addProducttype",
      step: 2,
      title: "Add",
      content: "AddProductType",
    },

    {
      selector: "#importProductType",
      step: 3,
      title: "Import Product Type",
      content: "ImportProductType",
    },
    {
      selector: "#Active",
      step: 4,
      title: "Activate",
      content: "ActivateProductType",
    },
    {
      selector: "#Inactive",
      step: 5,
      title: "Deactivate",
      content: "DeactivateProductType",
    },
  ],
};

touritem["Asset/AssetGrouping"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Product Container",

  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search Filter",
      content: "SearchFilterProductContainer",
    },

    {
      selector: "#addProductcontainer",
      step: 2,
      title: "Add",
      content: "AddProductContainer",
    },

    {
      selector: "#activeProduct",
      step: 3,
      title: "Activate",
      content: "ActivateProductContainer",
    },

    {
      selector: "#InactiveProduct",
      step: 4,
      title: "Deactivate",
      content: "DeactivateProductContainer",
    },
  ],
};

touritem["Asset/PendingRequest"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Pending Request",

  items: [
    {
      selector: "#pendingRequest",
      step: 1,
      title: "Pending Check Out Request",
      content: "PendingCheckOutRequestSection",
    },

    {
      selector: "#productName",
      step: 2,
      title: "Product Name",
      content: "PendingRequestProductName",
    },

    {
      selector: "#divtable1",
      step: 3,
      title: "Product Check Out Requests",
      content: "ProductCheckOutRequests",
    },

    {
      selector: "#pendignAssign",
      step: 4,
      title: "Assign",
      content: "AssignProductPendingRequest",
    },

    {
      selector: "#rejectProduct",
      step: 5,
      title: "Reject",
      content: "RejectProductPendingRequest",
    },

    {
      selector: "#nextButton",
      step: 6,
      title: "Next",
      content: "NextSection",
    },

    {
      selector: "#pendingRequest",
      step: 7,
      title: "Replace Request",
      content: "ReplaceRequestSteps",
    },

    {
      selector: "#divtable2",
      step: 8,
      title: "Replace Product List",
      content: "ReplaceProductList",
    },

    {
      selector: "#activeReplaceRequest",
      step: 9,
      title: "Approve/Reject Request",
      content: "ApproveRejectRequest",
    },

    {
      selector: "#repairReplaceRequest",
      step: 10,
      title: "Repair",
      content: "RepairRepalceRequest",
    },

    {
      selector: "#previousButton",
      step: 11,
      title: "Previous",
      content: "PreviousStep",
    },

    {
      selector: "#nextButton",
      step: 12,
      title: "Next",
      content: "NextSection",
    },

    {
      selector: "#pendingRequest",
      step: 13,
      title: "Return Request",
      content: "ReturnRequest",
    },

    {
      selector: "#searchFilterReturnRequest",
      step: 14,
      title: "Search Filter",
      content: "SearchFilterReturnRequest",
    },

    {
      selector: "#divtable3",
      step: 15,
      title: "Product List",
      content: "ReturnProductList",
    },

    {
      selector: "#ReturnRequest",
      step: 16,
      title: "Approve/Reject",
      content: "ApproveRejectReturnProduct",
    },

    {
      selector: "#previousButton",
      step: 17,
      title: "Previous",
      content: "PreviousStep",
    },

    {
      selector: "#nextButton",
      step: 18,
      title: "Next",
      content: "NextSection",
    },

    {
      selector: "#pendingRequest",
      step: 19,
      title: "Reservation",
      content: "ReservationStep",
    },

    {
      selector: "#productReserve",
      step: 20,
      title: "Search Filter",
      content: "ReservationSearchFilter",
    },

    {
      selector: "#divtable4",
      step: 21,
      title: "Product List",
      content: "ReservationProductList",
    },

    {
      selector: "#previousButton",
      step: 22,
      title: "Previous",
      content: "PreviousStep",
    },
  ],
};

touritem["AssetRequisition/NewAssetRequisitionListing"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "New Asset Requistion",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchThroughRaisedProductRequests",
    },
    {
      selector: ".aViewRequisition",
      step: 2,
      title: "RequestView",
      content: "ViewYourRequestDetailsComments",
    },
    {
      selector: "#ancCreateJob",
      step: 3,
      title: "ProductRequest",
      content: "RequesNewPproductsByAddingYouRequest",
    },
  ],
};
touritem["AssetRequisition/AddNewRequisition"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Add New Requisition",
  items: [
    {
      selector: "#main-content",
      step: 1,
      title: "EnterDescription",
      content: "NameProductAndDescribeIt",
    },
  ],
};
touritem["AssetCatalog/ScheduleUpdate"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Schedule Update",
  items: [
    {
      selector: "#aRelatedSearchAsset",
      step: 1,
      title: "SEARCH PRODUCT",
      content: "SEARCHPRODUCTScduleUpdate",
    },
    {
      selector: ".left-menu-tab",
      step: 2,
      title: "ManageMaintenance",
      content: "ManageMaintenances",
    },
    {
      selector: ".viewcomment",
      step: 3,
      title: "View",
      content: "ViewScduleUpdate",
    },
    {
      selector: "#postcomment",
      step: 4,
      title: "ManageCalibration",
      content: "MANAGECALIBRATIONScduleUpdate",
    },
  ],
};
touritem["Asset/rfidassetlisting"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Asset Listing",
  items: [
    {
      selector: ".theme-primary",
      step: 1,
      title: "WarehousManagement",
      content:
        "ViewRFIDEnabledAssetListTheirDetailsLikeLocationCodeScanHistoryAndMuchMore",
    },
  ],
};
touritem["Asset/ItemsScanSummary"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Items Scan Summary",
  items: [
    {
      selector: ".row .mt-0",
      step: 1,
      title: "ScanTagsAndAssignProduct",
      content: "CheckScannedTagsAssignProductTag",
    },
  ],
};
touritem["Asset/ScannedItems"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "Scanned Items",
  items: [
    {
      selector: "#tblMyRequisitions",
      step: 1,
      title: "ViewScannedTags",
      content: "ViewScannedTags",
    },
  ],
};
touritem["Asset/RFIDMissingAssets"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
  displayName: "RFID Missing Assets",
  items: [
    {
      selector: ".p-name .text-white",
      step: 1,
      title: "ViewScannedTags",
      content: "ViewRFIDEnabledAssetMissingAndUnlocated",
    },
  ],
};
tourData.push(touritem);

touritem["Timer/Index"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Timer",
  items: [
    {
      selector: ".chkbillable",
      step: 1,
      title: "AutomaticTimeTracking",
      content:
        "StartBillableNonbillableAutomaticTimetrackingProjectAndTaskWorking",
    },
    {
      selector: "#AddManually",
      step: 2,
      title: "ManualTimeTracking",
      content: "SaveYourPastEntriesProjectYouWorkedOn",
    },
    {
      selector: "#ShowCalender",
      step: 3,
      title: "ViewSavedTimeEntries",
      content: "DetailedViewYourTimeEntries",
    },
    {
      selector: ".continuetimer",
      step: 4,
      title: "ContinueTimeEntry",
      content: "ContinuePreviousTimeEntryWorkingSameProjectAndTask",
    },
    {
      selector: "#header-Graph",
      step: 5,
      title: "Reports",
      content: "ViewGraphicalReportsYourAndYourTeamTimeEntries",
    },
  ],
};
touritem["Timer/BulkTimeEntry"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Bulk Time Entry",
  items: [
    {
      selector: "#ddlProjectsBulk",
      step: 1,
      title: "Projects",
      content: "SelectProject",
    },
    {
      selector: ".multiselect-native-select",
      step: 2,
      title: "Users",
      content: "SelectUser",
    },
    {
      selector: "#aFillTimeEntry",
      step: 3,
      title: "FillTimeEntry",
      content: "EnterTimeEntryDetailsYourEmployees",
    },
    {
      selector: "#aAddnewLine",
      step: 4,
      title: "BulkTimeEntry",
      content: "AddMultipleTimeEntriesForMultipleEmployeesInOneGo",
    },
    {
      selector: "#btnSave",
      step: 5,
      title: "SaveTheDetails",
      content: "CongratsYouhaveSuccessfullySavedBulkTimeEntries",
    },
  ],
};
touritem["Timesheet/Index"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Timesheet",
  items: [
    {
      selector: "#week-picker",
      step: 1,
      title: "ViewWeeklyTimesheet",
      content: "SelectWeekAndTheUserToViewTheWeeklyTimesheet",
    },
    {
      selector: ".aAddHours",
      step: 2,
      title: "AddHours",
      content: "AddNumberHoursSpentProjectAndTask",
    },
    {
      selector: "#btnSendForApproval",
      step: 3,
      title: "SendForApproval",
      content: "CongratsYouHaveSubmittedTimesheetForApproval",
    },
  ],
};
touritem["Timesheet/Add"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Timesheet Add",
  items: [
    {
      selector: ".modal-dialog",
      step: 1,
      title: "EnterTimesheetDetails",
      content: "EnterTheTimesheetDetailsForWeekDays",
    },
    {
      selector: ".aAddHours",
      step: 2,
      title: "AddHours",
      content: " AddNumberHoursSpentProjectAndTask",
    },
  ],
};
touritem["TimesheetApproval/Index"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "TimesheetApproval",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchTimesheetsUsingSearchFilters",
    },
    {
      selector: ".aDetail",
      step: 2,
      title: "ViewTimesheetDetails",
      content: "ViewDetailedInformationOfTheTimesheet",
    },
    {
      selector: "#divApprove",
      step: 3,
      title: "ApproveTimesheet",
      content: "ApproveSingleOrMultipleTimesheetsInOneGo",
    },
    {
      selector: "#aReject",
      step: 4,
      title: "RejectTimesheet",
      content: "RejectSingleMultipleTimesheetsOneGoAndCommentDownTheReason",
    },
  ],
};
touritem["Timer/TrackEntryFlag"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Track Entry Flag",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchTheTimeEntries",
    },
    {
      selector: "#Flag",
      step: 2,
      title: "FlagTimeEntry",
      content: "FlagTimeEntry",
    },
    {
      selector: "#UnFlag",
      step: 3,
      title: "UnFlagTimeEntry",
      content: "UnFlagTimeEntry",
    },
  ],
};
touritem["WorkDiary/Index"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Work Diary",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content:
        "SearchScreenshotsScreenVideoRecordingTheUserUsingTheSearchFilters",
    },
    {
      selector: ".app-time-info",
      step: 2,
      title: "ApplicationTime",
      content: "MonitorTimeSpentTheUserParticularApplication",
    },
    {
      selector: ".viewdetails",
      step: 3,
      title: "MouseClicksKeystrokesDetails",
      content: "ViewDetailedInformationActivitiesTheUser",
    },
  ],
};
touritem["Service/Index"] = {
  ModuleDisplayName: "Appointment Calendar",
  ModuleName: "Course",
  displayName: "Service",
  items: [
    {
      selector: "#calendar",
      step: 1,
      title: "CalendarView",
      content: "ViewYourCourseAndServicAppointmentsSingleScreen",
    },
    {
      selector: ".app-time-info",
      step: 2,
      title: "CreateCourseService",
      content: "SetupCourseServiceYourConsumersBookIt",
    },
  ],
};
touritem["Course/Index"] = {
  ModuleDisplayName: "Appointment Calendar",
  ModuleName: "Course",
  displayName: "Course",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "ViewCourseAvailableSearchAvailableSearchFilters",
    },
  ],
};
touritem["Consumer/List"] = {
  ModuleDisplayName: "Appointment Calendar",
  ModuleName: "Course",
  displayName: "Consumer Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchCustomerDatabasePredefinedFilters",
    },
    {
      selector: ".dashbord-widget",
      step: 2,
      title: "Widgets",
      content: "MonitorTotalConsumerRevenue",
    },
    {
      selector: ".dashbord-widget",
      step: 3,
      title: "ViewConsumer",
      content: "VieConsumerDetailsClickingConsumerName",
    },
  ],
};
touritem["Consumer/Detail"] = {
  ModuleDisplayName: "Appointment Calendar",
  ModuleName: "Course",
  displayName: "Consumer Detail",
  items: [
    {
      selector: ".right-content",
      step: 1,
      title: "ConsumerHistory",
      content: "ViewConsumptionHistoryCustomerCourseService",
    },
  ],
};
touritem["Project/GanttChart"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Gantt Chart",
  items: [
    {
      selector: ".splitElement",
      step: 1,
      title: "ProjectDetail",
      content: "ViewProjectTaskInformation",
    },
    {
      selector: ".teamworkIcon",
      step: 2,
      title: "EditProjectDetails",
      content: "MakeDesiredChangesProjectInformation",
    },
    {
      selector: ".dropdown-toggle",
      step: 3,
      title: "ManageView",
      content: "SelectDesiredViewDisplayProjectInformation",
    },
    {
      selector: ".ganttToday",
      step: 4,
      title: "ProjectRelatedInformation",
      content: "ViewProjectInformationTheirProgressDetailsTimelineDormat",
    },
    {
      selector: ".ganttToday",
      step: 5,
      title: "DownloadInformation",
      content: "DownloadCompleteProjectInformation",
    },
  ],
};
touritem["Project/GanttChart"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "GanttChart",
  items: [
    {
      selector: ".border",
      step: 1,
      title: "SearchFilters",
      content: "SearchProjectInformationProjectNameProjectDate",
    },
    {
      selector: ".p-action-btn",
      step: 2,
      title: "MultiView",
      content: "ViewProjectInformationDailyWeeklyMonthlyYearlyFormat",
    },
    {
      selector: ".showRM_Setting",
      step: 3,
      title: "ProjectSettings",
      content: "SelectVisibilityInformationDisplayedRoadMap",
    },
    {
      selector: ".projectEditUpdate",
      step: 4,
      title: "EditYourProject",
      content: "MakeChangesProjectRightRoadMapScreen",
    },
    {
      selector: ".booking",
      step: 5,
      title: "ProjectDetail",
      content: "ViewProjectTimeline",
    },
  ],
};
touritem["GlobalTask/Index"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Global Task",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchGlobalTasksUsingSearchFilters",
    },
    {
      selector: ".ddlupdatestatus ",
      step: 2,
      title: "StatusUpdate",
      content: "ChangeGlobalTaskStatusListingScreen",
    },
    {
      selector: ".text-white",
      step: 3,
      title: "AddGlobalTask",
      content: "CreateNewBillableNonbillableGlobalTask",
    },
  ],
};
touritem["GlobalTask/Add"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Add GlobalTask",
  items: [
    {
      selector: "#btnsave",
      step: 1,
      title: "EnterTaskDetails",
      content: "CongratsYouHaveCreatedFirstGlobalTaskSuccessfully",
    },
  ],
};
touritem["Quotation/Index"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Quotation",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchYourQuotesSearchFilters",
    },
    {
      selector: "#ancAddQuotation",
      step: 2,
      title: "Add_Quotes",
      content: "CreateNewQuotesSpecificProjectClient",
    },
    {
      selector: "#ancEditQuotation",
      step: 3,
      title: "EditQuotes",
      content: "FlexibilityMakeChangesUnsentQuotes",
    },
    {
      selector: "#ancEditQuotation",
      step: 4,
      title: "SendToClient",
      content: "EaseSendingQuotesClient",
    },
    {
      selector: ".fa-eye",
      step: 5,
      title: "ViewDetails",
      content: "HaveDetailedInsightQuote",
    },
  ],
};
touritem["Quotation/Create"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Create Quotation",
  items: [
    {
      selector: "#btnSaveQuotation",
      step: 1,
      title: "EnterQuotesDetails",
      content: "CongratsYouHaveCreatedFirstQuoteSuccessfully",
    },
  ],
};
touritem["Quotation/DisplayQuotation"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Display Quotation",
  items: [
    {
      selector: "#aSend",
      step: 1,
      title: "SendViaEmail",
      content: "SendQuoteYourClientEmail",
    },
  ],
};
touritem["Project/RequestTimeList"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Request TimeList",
  items: [
    {
      selector: ".dashbord-widget",
      step: 1,
      title: "Widgets",
      content: "GetStatusWiseOverviewTimeRequests",
    },
    {
      selector: "#accordionEx",
      step: 2,
      title: "SearchFilters",
      content: "SearchTimeRequestsUsingSearchFilters",
    },
    {
      selector: ".fa-check",
      step: 3,
      title: "ApproveTimeRequests",
      content: "MakeRequestedRequiredAndApproveTimeRequest",
    },
    {
      selector: ".formbtn .fa-times",
      step: 4,
      title: "RejectTimeRequests",
      content: "RejectRequestCommentDownReason",
    },
  ],
};
touritem["Task/Index"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Task",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchTasksSearchFilters",
    },
    {
      selector: ".p-action-btn",
      step: 2,
      title: "MultipleViews",
      content: "ChooseDesiredViewKanbanCardListView",
    },
    {
      selector: ".fa-pencil",
      step: 3,
      title: "UpdateProgress",
      content: "UpdateProgressYourTask",
    },
    {
      selector: ".w-100",
      step: 4,
      title: "StatusUpdate",
      content: "ChangeStatusDirectlyListingScreen",
    },
    {
      selector: "#StartTimer",
      step: 5,
      title: "StartTimer",
      content: "StartTrackingTimeAssignedTask",
    },
  ],
};
touritem["ProjectRequest/Index"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Project Request",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchProjectRequestsSearchFilters",
    },
    {
      selector: "#aAddProjectRequestOwner",
      step: 2,
      title: "AddOwnerProjectRequest",
      content: "SetupProjectRequestOwner",
    },
    {
      selector: "#aAcceptMultipleProjectRequest",
      step: 3,
      title: "AcceptProjectRequest",
      content: "ApproveMultipleProjectRequestsRaisedClientInOneGo",
    },
    {
      selector: "#aRejectMultipleProjectRequest",
      step: 4,
      title: "RejectProjectRequest",
      content: "RejectMultipleProjectRequestsRaisedClientInOneGo",
    },
    //{
    //    selector: "#StartTimer",
    //    step: 5,
    //    title: "StartTimer",
    //    content: "StartTrackingTimeAssignedTask"
    //}
  ],
};
tourData.push(touritem);
