let tourData = [];
let touritem = {};

touritem["User/Dashboard"] = {
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
      content: "BookmarksContent",
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
      title: "AddNewProject",
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
  displayName: "CRM",
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
  displayName: "Expenses",
  items: [
    {
      selector: "#accordionEx",
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
    // {
    //     "selector": ".ddlupdatestatus",
    //     "step": 3,
    //     "title":"ManageTicketStatus",
    //     "content":"ManageTicketStatusContent"
    // },
    {
      selector: "#aCommanApproval",
      step: 3,
      title: "SendExpense",
      content: "SendExpenseContent",
    },
  ],
};
touritem["Expenses/Add"] = {
  displayName: "Add Expense",
  items: [
    {
      selector: ".saveSendforApproval",
      step: 1,
      title: "ExpenseAdd",
      content: "ExpenseAddContent",
    },
  ],
};
touritem["Expenses/Import"] = {
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
  displayName: "Client Bill",
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
touritem["Training/Index"] = {
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
touritem["HR/LeaveList"] = {
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
      selector: ".leaveaction_span",
      step: 3,
      title: "Search" + " " + "Filters",
      content: "WalkHRLeaveSearchContent",
    },
  ],
};
touritem["HR/LeaveTypeListing"] = {
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
touritem["CRM/ManageLeadAdd"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Manage Lead",
  items: [
    {
      selector: ".AddLeadDetail_a",
      step: 1,
      title: "enter" + " " + "Lead Detail",
      content: "AddLeadDetailContent",
    },
  ],
};
touritem["CRM/ManageLeadEdit"] = {
  ModuleDisplayName: "CRM Management",
  ModuleName: "CRM",
  displayName: "Manage Lead",
  items: [
    {
      selector: ".AddLeadDetail_a",
      step: 1,
      title: "enter" + " " + "Lead Detail",
      content: "UpdateLeadDetailContent",
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
      selector: "#example",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: ".modal-dialog .float-right a:first-of-type",
      step: 3,
      title: "AddContract",
      content: "AddNewContent",
    },
    {
      selector: "#Deal_Filter",
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
      selector: ".action-list-box .list-actions",
      step: 7,
      title: "actionButton",
      content: "actionButtonContent",
    },
  ],
};
touritem["ApprovalChain/Index"] = {
  displayName: "ApprovalChain",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search Filters",
      content: "SearchFilterChainTour",
    },
    {
      selector: "#AddNewChain",
      step: 2,
      title: "Add Chain",
      content: "AddChaintour",
    },
  ],
};
touritem["CRM/ViewDealDetails"] = {
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
  displayName: "Manage Account",
  items: [
    {
      selector: ".formbtn",
      step: 1,
      title: "EnterAccountDetails",
      content: "AddAccountDetailContent",
    },
  ],
};
touritem["ApprovalGroup/Index"] = {
  displayName: "ApprovalGroup",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search Filters",
      content: "SearchFilterGroupTour",
    },
    {
      selector: "#UnAddNewGroup",
      step: 2,
      title: "Add Approval Group",
      content: "AddNewGroupTour",
    },
  ],
};
touritem["ApprovalRule/Index"] = {
  displayName: "Approval Rule",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "SearchFilterRuleTour",
    },
    {
      selector: "#AddNewRule",
      step: 2,
      title: "Add" + " " + "Rule",
      content: "AddRuleTour",
    },
  ],
};
touritem["ApprovalRule/Add"] = {
  displayName: "Add Approval Rule",
  items: [
    {
      selector: "#Module",
      step: 1,
      title: "Module" + " " + "selections",
      content: "ModuleTour",
    },
    {
      selector: "#UseSequence",
      step: 2,
      title: "UseSequence",
      content: "UseSequenceTour",
    },
  ],
};
touritem["CRM/ItemTypeListing"] = {
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
  displayName: "Purchase Order Listing",
  items: [
    {
      selector: ".PurchaseOrderDatasearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchPurchaseFilterContent",
    },
    {
      selector: ".divUseSequence_a",
      step: 2,
      title: "New" + " " + "PurchaseOrderWithoutRef",
      content: "AddPurchaseOrderContent",
    },
    {
      selector: ".text-overflow-dynamic-container",
      step: 3,
      title: "ViewDetail",
      content: "ViewPurchaseOrderContent",
    },
  ],
};
touritem["CRM/InvoiceListing"] = {
  displayName: "Invoice List",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchInvoiceFilterContent",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 2,
      title: "Status" + " " + "Update",
      content: "UpdateInvoiceStatusContent",
    },
    {
      selector: "#addInvoice_a",
      step: 3,
      title: "AddInvoice",
      content: "AddInvoiceContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewInvoiceContent",
    },
  ],
};
touritem["CRM/ItemListing"] = {
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
  displayName: "Accounts",
  items: [
    {
      selector: "#viewLeadeContent_a",
      step: 1,
      title: "Widgets",
      content: "SearchAccountFilterContent",
    },
    {
      selector: "#accordionEx",
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
      selector: "#example",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: ".modal-dialog .float-right a:first-of-type",
      step: 3,
      title: "AddContract",
      content: "AddNewContent",
    },
    {
      selector: "#CampaignFilter",
      step: 4,
      title: "Filters",
      content: "CampaignFiltersContent",
    },
    {
      selector: ".action-list-box .list-actions",
      step: 5,
      title: "actionButton",
      content: "actionButtonContent",
    },
  ],
};
touritem["CRM/ContactListing"] = {
  displayName: "Contact Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchContactFilterContent",
    },
    {
      selector: "#addContact_a",
      step: 3,
      title: "AddLead",
      content: "AddLeadContent",
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
      selector: "#example",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: ".modal-dialog .float-right a:first-of-type",
      step: 3,
      title: "AddContract",
      content: "AddNewContent",
    },
    {
      selector: "#Contract_Filter",
      step: 4,
      title: "Filters",
      content: "ContractFiltersContent",
    },
    {
      selector: ".action-list-box .list-actions",
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
      selector: "#example",
      step: 2,
      title: "MangeView",
      content: "ManageviewContent",
    },
    {
      selector: ".modal-dialog .float-right a:first-of-type",
      step: 3,
      title: "AddNew",
      content: "AddNewContent",
    },
    {
      selector: "#StageFilters",
      step: 4,
      title: "Filters",
      content: "FilterStageContent",
    },
  ],
};
touritem["CRM/ViewAccountDetails"] = {
  displayName: "ViewAccountDetails",
  items: [
    {
      selector: "#myTab",
      step: 1,
      title: "Detail ACTIVITY ",
      content: "DetailsActivityContent",
    },
  ],
};
touritem["CRM/ManageCampaign"] = {
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
  displayName: "Approval Chain GroupList",
  items: [
    {
      selector: "#RankUp",
      step: 1,
      title: "Order" + "" + "Management",
      content: "Changeorderupgroup",
    },
    {
      selector: "#RankDown",
      step: 2,
      title: "Order" + "" + "Management",
      content: "ChangeorderuDowngroup",
    },
  ],
};
touritem["ApprovalChain/add"] = {
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
touritem["AssetCatalog/Index"] = {
  displayName: "AssetCatalogIndex",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "Filtertourguide",
    },
    {
      selector: "#Addproduct",
      step: 2,
      title: "AddProduct",
      content: "AssetAddtourguide",
    },
  ],
};
touritem["Asset/Dashboard"] = {
  displayName: "AssetDashboard",
  items: [
    {
      selector: "#aDateLable_global",
      step: 1,
      title: "DATESELECTION",
      content: "AddassetDateSelection",
    },
    {
      selector: "#hlkAddMoreReports",
      step: 2,
      title: "ADDREPORT",
      content: "AddassetAddreports",
    },
  ],
};
touritem["Asset/ItemsScanSummary"] = {
  displayName: "AssetItemsScanSummary",
  items: [
    {
      selector: "main-content",
      step: 1,
      title: "ScanTagsAssignproduct",
      content: "CheckScannedAssetitemScan",
    },
  ],
};
touritem["Asset/MyItems"] = {
  displayName: "AssetMyItems",
  items: [
    {
      selector: "#AddCheckOutRequest",
      step: 1,
      title: "GETProduct",
      content: "GETProductAssetMyitems",
    },
  ],
};
touritem["Asset/rfidassetlisting"] = {
  displayName: "Assetrfidassetlisting",
  items: [
    {
      selector: ".partition",
      step: 1,
      title: "AsssetRfidListing",
      RfidListing: "AsssetRfidListingList",
    },
  ],
};
touritem["Asset/RFIDMissingAssets"] = {
  displayName: "AssetRFIDMissingAssets",
  items: [
    {
      selector: ".mt-2sd",
      step: 1,
      title: "VIEWSCANNEDTAGS",
      content: "RfidMissingAssetVIEWSCANNEDTAGS",
    },
  ],
};
touritem["Asset/ScannedItems"] = {
  displayName: "AssetScannedItems",
  items: [
    {
      selector: ".table",
      step: 1,
      title: "VIEWSCANNEDTAGS",
      content: "VIEWSCANNEDTAG",
    },
  ],
};
touritem["AssetAssignment/Add"] = {
  displayName: "AssetAssignmentAdd",
  items: [
    {
      selector: "#AssetassignSaveBtn",
      step: 1,
      title: "PRODUCSELECTIONASSIGNMENT",
      content: "AssetASSIGNMENT",
    },
  ],
};
touritem["AssetAssignment/Index"] = {
  displayName: "AssetAssignmentIndex",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search Filters",
      content: "SearchFilterAssetAssignment",
    },
    {
      selector: "#AssetAssignProduct",
      step: 2,
      title: "Assign Item",
      content: "AssetAssignmentAssignProduct",
    },
  ],
};
touritem["AssetCatalog/Add"] = {
  displayName: "AssetCatalogAdd",
  items: [
    {
      selector: "#productCreateTab",
      step: 1,
      title: "ENTERPRODUCTDETAILS",
      content: "CreateProductAssetCatalog",
    },
    {
      selector: "#AssetAssignProduct",
      step: 2,
      title: "AddItem",
      content: "AddproductAssetCatalog",
    },
    {
      selector: "#productDeployTab",
      step: 3,
      title: "PRODUCTDEPLOYMENT",
      content: "ProductDeployementAssetCatalog",
    },
  ],
};

touritem["AssetCatalog/TransferItem"] = {
  displayName: "AssetCatalogTransferItem",
  items: [
    {
      selector: ".locationtransfer",
      step: 1,
      title: "PRODUCTTRANSFER",
      content: "PRODUCTTRANSFERTransferitem",
    },
  ],
};
touritem["AssetCatalog/ScheduleUpdate"] = {
  displayName: "AssetCatalogScheduleUpdate",
  items: [
    {
      selector: "#productCreateTab",
      step: 1,
      title: "SEARCH PRODUCT",
      content: "SEARCHPRODUCTScduleUpdate",
    },
    {
      selector: "#sidebarScheduleUpdate",
      step: 2,
      title: "MANAGEMAINTENANCE",
      content: "ManageMaintenances",
    },
    {
      selector: "#EditSchduleUpdate",
      step: 3,
      title: "VIEW",
      content: "ViewScduleUpdate",
    },
    {
      selector: "#Update",
      step: 4,
      title: "MANAGECALIBRATION",
      content: "MANAGECALIBRATIONScduleUpdate",
    },
  ],
};
touritem["AssetRequisition/AddNewRequisition"] = {
  displayName: "AddNewRequisition",
  items: [
    {
      selector: "#NewRequisitionid",
      step: 1,
      title: "ENTERDESCRIPTION",
      content: "ENTERDESCRIPTIONNewRequisition",
    },
  ],
};
touritem["AssetRequisition/NewAssetRequisitionListing"] = {
  displayName: "NewAssetRequisitionListing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchFilterRequisitionListing",
    },
    {
      selector: "#REUESTVIEW",
      step: 2,
      title: "REQUESTVIEW",
      content: "REQUESTVIEWRequisition",
    },
    {
      selector: "#RequestNewProductType",
      step: 3,
      title: "PRODUCTREQUEST",
      content: "PRODUCTREQUESTRequisition",
    },
  ],
};
touritem["TimeTracking/Category"] = {
  displayName: "TimeTrackingCategory",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "TimetrackingCategory",
    },
    {
      selector: "#AddCategoryID",
      step: 2,
      title: "AddNew",
      content: "TimetrackingCategoryAdd",
    },
    {
      selector: "#ImportCategoryID",
      step: 3,
      title: "Import",
      content: "TimetrackingCategoryImport",
    },
    {
      selector: "#DeleteCategoryID",
      step: 4,
      title: "Delete",
      content: "TimetrackingCategoryDelete",
    },
    {
      selector: ".actions-onclick",
      step: 5,
      title: "Edit",
      content: "TimetrackingCategoryEdit",
    },
  ],
};
touritem["TimeTracking/TimetrackDashBoard"] = {
  displayName: "TimeTrackingTimetrackDashBoard",
  items: [
    {
      selector: "#Changeview",
      step: 1,
      title: "SwitchView",
      content: "TimetrackDashBoardChangeview",
    },
  ],
};
touritem["TimeTracking/DepartmentViewDasboard"] = {
  displayName: "TimeTrackingDepartmentViewDasboard",
  items: [
    {
      selector: "#SearchReset",
      step: 1,
      title: "SearchReset",
      content: "SearchResetDepartmentViewDasboard",
    },
    {
      selector: "#shiftchange",
      step: 2,
      title: "DayShiftView",
      content: "DayShiftViewDepartmentViewDasboard",
    },
    {
      selector: ".mt-1",
      step: 3,
      title: "DateRange",
      content: "DateRangeDepartmentViewDasboard",
    },
  ],
};
touritem["TimerReports/Index"] = {
  displayName: "TimerReportsIndex",
  items: [
    {
      selector: ".customsearchbox",
      step: 1,
      title: "Search",
      content: "SearchTimereport",
    },
    {
      selector: "#divscrollsetuptabs",
      step: 2,
      title: "DefaultReports",
      content: "DefaultReportsSilentApp",
    },
    {
      selector: "#ReportFilter",
      step: 3,
      title: "ReportFilters",
      content: "ReportFiltersSilentApp",
    },
    {
      selector: "#DateRangediv",
      step: 4,
      title: "DateRange",
      content: "DateRangeSilentAppreport",
    },
    {
      selector: ".text-end",
      step: 5,
      title: "SearchClear",
      content: "SearchClearSilentAppreport",
    },
  ],
};
touritem["TimeTracking/AppsAndWebsites"] = {
  displayName: "TimeTrackingAppsAndWebsites",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchFiltersUsedApplication",
    },
    {
      selector: "#AssignDepartment",
      step: 2,
      title: "AssignDepartment",
      content: "UsedApplicationAssigndeparment",
    },
    {
      selector: "#ViewHistory",
      step: 3,
      title: "ViewHistory",
      content: "ViewHistoryUsedApplication",
    },
    {
      selector: "#DeleteHistory",
      step: 4,
      title: "Delete",
      content: "DeleteUsedApplication",
    },
    {
      selector: "#ddlUserCurrentStatus",
      step: 5,
      title: "ListCardView",
      content: "ListCardViewUsedApplication",
    },
  ],
};
touritem["TimeTracking/UserProductivity"] = {
  displayName: "TimeTrackingUserProductivity",
  items: [
    {
      selector: ".form-group",
      step: 1,
      title: "SelectUser",
      content: "SelectUserAppProductivity",
    },
    {
      selector: ".form-check-inline",
      step: 2,
      title: "SetAppWebsiteProductivity",
      content: "SetAppWebsiteAppProductivity",
    },
    {
      selector: "#ViewHistory",
      step: 3,
      title: "SetAppWebsiteProductivity",
      content: "SetAppWebsiteAppProductivity",
    },
  ],
};
touritem["CRM/ManageStage"] = {
  displayName: "Manage Lead",
  items: [
    {
      selector: ".btn-success",
      step: 1,
      title: "enter" + " " + "Stage Detail",
      content: "AddStageDetailContent",
    },
  ],
};
touritem["WorkDiary/Index"] = {
  displayName: "WorkDiaryIndex",
  items: [
    {
      selector: ".fa-search",
      step: 1,
      title: "SearchFilters",
      content: "SearchFilterWorkDairy",
    },
    {
      selector: ".hasdatetimepicker",
      step: 2,
      title: "DateFilter",
      content: "DateFilterWorkDairy",
    },
    {
      selector: "#ApplicationTime",
      step: 3,
      title: "ApplicationTime",
      content: "ApplicationTimeWorkdairy",
    },
  ],
};
tourData.push(touritem);
export { tourData };
