var tourData = [];
var touritem = {};

touritem["User/Dashboard"] = {
  ModuleDisplayName: "Company Setup",
  ModuleName: "User",
  displayName: "Dashboard",
  items: [
    {
      selector: "a#navbarDropdownPortfolio",
      step: 1,
      title: "FullMenu",
      content: "FullMenuContent",
    },
    {
      selector: "div#fullMenuUl",
      step: 2,
      title: "FullMenu",
      content: "FullMenuContent",
    },
    {
      selector: "ul.my-account",
      step: 3,
      title: "ProflieMenu",
      content: "ProflieMenuContent",
    },
    {
      selector: "#DivTimerContent",
      step: 4,
      title: "TimerIcon",
      content: "TimerIconContent",
    },
    {
      selector: "li.wizardnew",
      step: 5,
      title: "WizardIcon",
      content: "WizardIconContent",
    },
    {
      selector: "#anceditMyDashboard",
      step: 6,
      title: "MyShortcuts",
      content: "MyShortcutsContent",
    },
    {
      selector: ".rightsideicon",
      step: 7,
      title: "MyShortcuts",
      content: "MyShortcutsContent",
    },
    {
      selector: "#ancAddGroupMyDashboard",
      step: 8,
      title: "AddNewGroup",
      content: "AddNewGroupContent",
    },
    {
      selector: ".clsdashboardgroup ul.shortcuts-menu li:first-child",
      step: 9,
      title: "ShortcutLink",
      marked: true,
      content: "ShortcutLinkContent",
    },
  ],
};

touritem["User/Home"] = {
  ModuleDisplayName: "Company Setup",
  ModuleName: "User",
  displayName: "Home",
  items: [
    {
      selector: "#headingOne1",
      step: 1,
      title: "Inbox",
      content: "InboxContent",
    },
    {
      selector: "#headingTwo2",
      step: 2,
      title: "Activities",
      content: "ActivitiesContent",
    },
    {
      selector: "#headingThree2",
      step: 3,
      title: "Bookmarks",
      content: "Bookmarks",
    },
    {
      selector: "#divInboxSibling",
      step: 4,
      title: "Reports",
      content: "ReportsContent",
    },
    {
      selector: "#hlkAddMoreReports",
      step: 5,
      title: "AddMore",
      content: "AddMoreContent",
    },
  ],
};
touritem["Project/Index"] = {
  ModuleDisplayName: "Project Management",
  ModuleName: "Project",
  displayName: "Project",
  items: [
    {
      selector: "li.three_wid",
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
touritem["ClientBill/Index"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "ClientBill",
  displayName: "Index",
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
touritem["ClientBill/Add"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "ClientBill",
  displayName: "Add",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "EnterDetails",
      content: "SelectContractAndFillTheBillingDetails",
    },
    {
      selector: ".invaction",
      step: 2,
      title: "ManageLineItems",
      content: "SelectionActionRequiredForTheSelectLineItem.",
    },
    {
      selector: ".manualInvoice_a",
      step: 3,
      title: "Manual" + " " + "Invoice",
      content: "ManualInvoiceContent",
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
touritem["HR/Leave"] = {
  ModuleDisplayName: "HR Management",
  ModuleName: "HR",
  displayName: "Leave",
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
  displayName: "LeaveApproval",
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
touritem["ApprovalChain/Index"] = {
  ModuleName: "Approval",
  displayName: "Approval",
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
  ModuleDisplayName: "Asset Management",
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
  ModuleDisplayName: "Asset Management",
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
      title: "Select" + " " + "Account",
      content: "SelectAccountContent",
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
  ModuleDisplayName: "Hiring",
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
  ModuleDisplayName: "Hiring",
  ModuleName: "Hiring",
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
  displayName: "Course Listing",
  items: [
    {
      selector: "#accordionEx",
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
touritem["BillingRule/RuleListing"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "Billing",
  displayName: "BillingRule Listing",
  items: [
    {
      selector: "#accordionEx .left-filter",
      step: 1,
      title: "SearchRule",
      content: "SearchBillingRules ",
    },
    {
      selector: ".ddlupdatestatus",
      step: 2,
      title: "StatusUpdate",
      content: "ChangeBillingRulestatus",
    },
    {
      selector: ".actions-onclick",
      step: 3,
      title: "ViewRule",
      content: "ViewYourBillingRuleDetails ",
    },
    {
      selector: "#addBillingRule",
      step: 4,
      title: "AddRule",
      content: "CreateNewBillingRule ",
    },
    {
      selector: "#myTab",
      step: 5,
      title: "GeneralInformation",
      content: "EnterTheRequiredInformation",
    },
    {
      selector: "#ancNodesData",
      step: 6,
      title: "BillingNode",
      content: "SetupParentAndChildBillingNodes",
    },
    {
      selector: "#btnSaveAndClose",
      step: 7,
      title: "Limits",
      content: "AddLimitsToTheBillingRule",
    },
    {
      selector: "#ancNodesDataTopMost",
      step: 8,
      title: "SaveTheRule",
      content: "CongratsYouHaveCreatedYourFirstBillingRule",
    },
  ],
};
touritem["BillingService/Index"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "Billing",
  displayName: "BillingRule Listing",
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
      content: "CloningAllowsYouToCreateDuplicateService  ",
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
  ModuleName: "Invoice",
  displayName: "BillingRule Listing",
  items: [
    {
      selector: "#ancProcess",
      step: 1,
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
  ModuleName: "Invoice",
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
  ModuleName: "Invoice",
  displayName: "CatchAll",
  items: [
    {
      selector: "#BulkMoveUsingFile",
      step: 1,
      title: "BulkMove",
      content: "UseBulkMoveOptionProcessBulkRecords",
    },
  ],
};
touritem["ClientInvoice/CatchAll"] = {
  ModuleDisplayName: "Invoice",
  ModuleName: "Invoice",
  displayName: "CatchAll",
  items: [
    {
      selector: "#BulkMoveUsingFile",
      step: 1,
      title: "ProcessLog",
      content: "CheckoutTicketProcessingLogsIdentifyBillingRule",
    },
  ],
};
touritem["Client/Index"] = {
  ModuleDisplayName: "Company Setup",
  ModuleName: "User",
  displayName: "Client",
  items: [
    {
      selector: ".left-menu-tab",
      step: 1,
      title: "SearchRule",
      content: "SearchAccountUsingPredefinedSearchFilters",
    },
    //{
    //    selector: ".actions .action_icon",
    //    step: 2,
    //    title: "ManageConfigurations",
    //    content: "ManageConfigurations"
    //},
    //{
    //    selector: ".actions .action_icon",
    //    step: 3,
    //    title: "EnterTheRequiredInformation",
    //    content: "EnterTheRequiredInformation"
    //}
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
      content: "ManageConfigurations",
    },
    {
      selector: ".actions .action_icon",
      step: 3,
      title: "EnterTheRequiredInformation",
      content: "EnterTheRequiredInformation",
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
      selector: "#accordionEx",
      step: 2,
      title: "SearchFilters",
      content: "SearchBasedOnTheTitleAndStatusOfTheEventAdded",
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
touritem["Review/Main"] = {
  ModuleDisplayName: "Performance Review",
  ModuleName: "Review",
  displayName: "Review Listing",
  items: [
    {
      selector: ".responivecustomtab",
      step: 1,
      title: "PerformanceManagement",
      content: "SetupSkillsAndAddNotesForEmployeesFromSingleScreen",
    },
  ],
};
touritem["Review/Index"] = {
  ModuleDisplayName: "Performance Review",
  ModuleName: "Review",
  displayName: "Review",
  items: [
    {
      selector: "#reviewList",
      step: 1,
      title: "StartReview",
      content: "ClickOnTheReviewNameToStartTheReview",
    },
    {
      selector: "#aCreateCategory",
      step: 2,
      title: "SearchFilters",
      content: "SearchBasedOnTheTitleAndStatusOfTheEventAdded",
    },
    {
      selector: "#amyteam",
      step: 3,
      title: "UserSelection",
      content:
        "AddNotesCheckTheSkillsSelectingTheUserFromYourTeamAsPerYourRequirement",
    },
  ],
};
touritem["Feedback/UserFeedbackListing"] = {
  ModuleDisplayName: "Performance Review",
  ModuleName: "Review",
  displayName: "User Feedback Listing",
  items: [
    {
      selector: ".aFeedbackanswer",
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
      selector: ".saveTicket",
      step: 1,
      title: "Save as Draft or Submit",
      content: "SaveasDraftorSubmit",
    },
    {
      selector: ".submit",
      step: 1,
      title: "Save as Draft or Submit",
      content: "SaveasDraftorSubmit",
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
      content: "SearhFiltersGroup",
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
      selector: "#AddManually",
      step: 1,
      title: "Add Manually",
      content: "ManualContent",
    },
    {
      selector: ".Project",
      step: 2,
      title: "Select Project",
      content:
        "SelectProjectTimeTrack",
    },
    {
      selector: "#Task",
      step: 3,
      title: "Select Task",
      content: "SelectTaskTimeTrack",
    },
    {
      selector: "#Tags",
      step: 4,
      title: "Tags",
      content:"SelectTagsTimeTrack",
    },
    {
      selector: "#AddTags",
      step: 5,
      title: "Create a New Tag",
      content:"CreateTags",
    },
    {
      selector: "#isBillable",
      step: 6,
      title: "Paid/Unpaid",
      content: "PaidUnpaidcontent.",
    },
    {
      selector: "#Break",
      step: 7,
      title: "Break",
      content: "BreakContent",
    },
    {
      selector: "#AddManualBreak",
      step: 8,
      title: "Add Manually",
      content: "ManualBreakContent",
    },
    {
      selector: "#Taskdescription",
      step: 9,
      title: "Description",
      content: "DescContent",
    },
    {
      selector: "#Start",
      step: 10,
      title: "Start Timer",
      content: "StartTimeContent",
    },
    {
      selector: "#aDateLable_",
      step: 11,
      title: "FilterTitle",
      content: "FilterContent",
    },
    {
      selector: "#list",
      step: 12,
      title: "ListGraphTitle",
      content: "ListGraphContent",
    },
    {
      selector: "#tab-Details_status",
      step: 13,
      title: "MyStatus",
      content: "MyStatusContent",
    },
    {
      selector: "#tab-Details_team",
      step: 14,
      title: "TeamStatus",
      content: "ListGraphContent",
    }
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
touritem["Timesheet/Index"] = {
  ModuleDisplayName: "Time Track",
  ModuleName: "Timer",
  displayName: "Timesheet",
  items: [
    {
      selector: "#Export",
      step: 1,
      title: "Export",
      content: "ExportContent",
    },
    {
      selector: "#SelectWeek",
      step: 2,
      title: "Select Week",
      content: "SelectWeekContent",
    },
    {
      selector: ".taskAddModal",
      step: 3,
      title: "Add New Entry",
      content: "AddNewEntryContent",
    },
    {
      selector: "#user_id",
      step: 4,
      title: "Show Timesheet",
      content: "ShowTimesheetContent",
    },
    {
      selector: "#btnSendForApproval",
      step: 5,
      title: "Save as draft",
      content: "SaveContent",
    },
    {
      selector: "#btnCopyLastWeek",
      step: 6,
      title: "Copy last week",
      content: " LastWeekContent",
    },
    {
      selector: "#btnCopyUser",
      step: 7,
      title: "Copy to other users",
      content: "UserContent",
    },
    {
      selector: "#CopyTimesheet",
      step: 8,
      title: "Copy timesheet",
      content: "CopyTimesheetContent",
    },
    {
      selector: "#btnSaveAsDraft",
      step: 9,
      title: "Send for approval",
      content: "ApprovalContent",
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
  displayName: "TrackEntryFlag",
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
      content: "FlagMultipleTimeEntriesOneGoAndCommentDownTheReason.",
    },
    {
      selector: "#UnFlag",
      step: 3,
      title: "UnFlagTimeEntry",
      content: "UnFlagMultipleTimeEntriesOneGoAndCommentDownTheReason",
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
touritem["CommunicationModes/Index"] = {
  ModuleDisplayName: "CRM Management",
  displayName: "CRM",
  items:
    [
      {
        selector: "#crmleftsearch",
        step: 1,
        title: "SearchFilters",
        content: "SearchCommunicationFilterContent"
      },
      {
        selector: "#AddManageCommunicationModes",
        step: 2,
        title: "Add",
        content: "AddManageCommunicationModes"
      },
      {
        selector: "#crmlistingStatus_span",
        step: 3,
        title: "Status" + " " + "Update",
        content: "UpdateAddManageCommunicationModes"
      }
    ]
};
touritem["CRM/Dashboard"] = {
  ModuleDisplayName: "CRM Management",
  displayName: "CRM",
  items:
    [
      {
        selector: "#MyViews",
        step: 1,
        title: "MyView",
        content: "MyViewContent"
      },
      {
        selector: "#teamview",
        step: 2,
        title: "TeamView",
        content: "TeamViewContent"
      },
      {
        selector: "#ddlChangeView",
        step: 3,
        title: "SelectView",
        content: "SelectViewContent"
      },
      {
        selector: "#aViewPin_global",
        step: 4,
        title: "PinView",
        content: "PinViewContent"
      },
      {
        selector: "#aDateLable_global",
        step: 5,
        title: "ReportSearchFilters",
        content: "ReportSearchFiltersContent"
      }
    ]
};
touritem["CRM/InwardListing"] = {
  ModuleDisplayName: "CRM Management",
  displayName: "CRM",
  items:
    [
      {
        selector: "#crmleftsearch",
        step: 1,
        title: "SearchFilters",
        content: "GoodInwardContent"
      },
      {
        selector: "#ExportToExcel",
        step: 2,
        title: "ExporttoExcel",
        content: "ExporttoExcelContent"
      },
      {
        selector: "#RejectApprove",
        step: 3,
        title: "Approve/Reject",
        content: "RejectApproveContent"
      },
      {
        selector: "#RejectApprove1",
        step: 4,
        title: "Approve/Reject",
        content: "RejectApproveContent"
      },
      {
        selector: "#titleName",
        step: 5,
        title: "DefaultView",
        content: "DefaultViewContent"
      },
      {
        selector: ".defaultedit",
        step: 6,
        title: "MangeView",
        content: "ManageviewContent"
      },
      {
        selector: "#AddNewView",
        step: 7,
        title: "AddNew",
        content: "AddNewViewContent"
      },
      {
        selector: ".actions",
        step: 8,
        title: "actionButton",
        content: "actionButtonContent"
      }
    ]
};
touritem["CRM/Index"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Lead",
  items:
    [
      {
        selector: "#titleName",
        step: 1,
        title: "DefaultView",
        content: "DefaultViewContent"
      },
      {
        selector: ".defaultedit",
        step: 2,
        title: "MangeView",
        content: "ManageviewContent"
      },
      {
        selector: "#AddNewView",
        step: 3,
        title: "AddNew",
        content: "AddNewViewContent"
      },
      {
        selector: "#ExportToExcel",
        step: 4,
        title: "ExporttoExcel",
        content: "LeadExporttoExcelContent"
      },
      {
        selector: "#ImportLeads",
        step: 5,
        title: "ImportLeads",
        content: "ImportLeadsContent"
      },
      {
        selector: "#ChangeOwnerId",
        step: 6,
        title: "ChangeLeadOwner",
        content: "ChangeLeadOwnerContent"
      },
      {
        selector: "#AdditionalOwnerId",
        step: 7,
        title: "AdditionalOwnerId",
        content: "AdditionalOwnerIdContent"
      },
      {
        selector: "#Sendbulkmail",
        step: 8,
        title: "SendEmail",
        content: "SendEmailContent"
      },
      {
        selector: "#CloseLeadId",
        step: 9,
        title: "CloseLeads",
        content: "CloseLeadsContent"
      },
      {
        selector: "#action-list",
        step: 10,
        title: "actionButton",
        content: "actionButtonContent"
      }
    ]
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
      content: "DefaultViewContent"
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent"
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent"
    },
    {
      selector: "#action-list",
      step: 4,
      title: "actionButton",
      content: "actionButtonContent"
    }
  ]
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
      content: "DefaultViewContent"
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent"
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent"
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "FiltersContent"
    }
  ]
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
      content: "DefaultViewContent"
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent"
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent"
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "CampaignFiltersContent"
    },
    {
      selector: "#action-list",
      step: 5,
      title: "actionButton",
      content: "actionButtonContent"
    }
  ]
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
      content: "DefaultViewContent"
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent"
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent"
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "ContractFiltersContent"
    },
    {
      selector: "#action-list",
      step: 5,
      title: "actionButton",
      content: "actionButtonContent"
    },
    {
      selector: "#viewLeadeContent_a",
      step: 6,
      title: "ViewDetail",
      content: "ViewContractContent"
    },
    {
      selector: "#crmlistingStatus_span",
      step: 7,
      title: "Status" + " " + "Update",
      content: "UpdateLeadStatusContent"
    },
  ]
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
      content: "DefaultViewContent"
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent"
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent"
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "DealFiltersContent"
    },
    {
      selector: "#ChangeOwnerId",
      step: 5,
      title: "ChangeDealOwner",
      content: "ChangeDealOwnerContent"
    },
    {
      selector: "#AdditionalOwnerId",
      step: 6,
      title: "AdditionalOwner",
      content: "AdditionalOwnerContent"
    },
    {
      selector: "#action-list",
      step: 7,
      title: "actionButton",
      content: "actionButtonContent"
    }   
  ]
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
      content: "DefaultViewContent"
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent"
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent"
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "ProductFiltersContent"
    },
    {
      selector: "#crmleftsearch",
      step: 5,
      title: "SearchFilters",
      content: "SearchProductFilterContent"
    },
    {
      selector: "#AddProducts",
      step: 6,
      title: "AddItem",
      content: "AddItemContent"
    }
  ]
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
      content: "DefaultViewContent"
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent"
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent"
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "ProductFiltersContent"
    },
    {
      selector: "#action-list",
      step: 4,
      title: "actionButton",
      content: "actionButtonContent"
    },
    {
      selector: "#ExportToExcel",
      step: 5,
      title: "ExporttoExcel",
      content: "ExporttoExcelContent"
    },
    {
      selector: "#Sendbulkmail",
      step: 6,
      title: "SendEmail",
      content: "SendEmailQuoteContent"
    },
  ]
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
      content: "DefaultViewContent"
    },
    {
      selector: ".defaultedit",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent"
    },
    {
      selector: "#AddNewView",
      step: 3,
      title: "AddNew",
      content: "AddNewViewContent"
    },
    {
      selector: "#Filters",
      step: 4,
      title: "Filters",
      content: "ProductFiltersContent"
    },
    {
      selector: "#action-list",
      step: 4,
      title: "actionButton",
      content: "actionButtonContent"
    },
    {
      selector: "#ExportToExcel",
      step: 5,
      title: "ExporttoExcel",
      content: "ExporttoExcelContent"
    }    
  ]
};
tourData.push(touritem);
