var tourData = [];
var touritem = {};

touritem["User/Dashboard"] = {
  ModuleDisplayName: "Company Setup",
  ModuleName:"User",
  displayName: "Dashboard",
  items: [
    {
      selector: "a#navbarDropdownPortfolio",
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
      selector: "#DivTimerNew",
      step: 3,
      title: "TimerIcon",
      content: "TimerIconContent",
    },    
    {
      selector: "#anceditMyDashboard",
      step: 4,
      title: "MyShortcuts",
      content: "MyShortcutsContent",
    },
    {
      selector: ".rightsideicon",
      step: 5,
      title: "MyShortcuts",
      content: "MyShortcutsContent",
    },
    {
      selector: "#ancAddGroupMyDashboard",
      step: 6,
      title: "AddNewGroup",
      content: "AddNewGroupContent",
    },
    {
      selector: ".clsdashboardgroup ul.shortcuts-menu li:first-child",
      step: 7,
      title: "ShortcutLink",
      marked: true,
      content: "ShortcutLinkContent",
    },
  ],
};

touritem["Ticketing/Index"] = {
    ModuleDisplayName: "Ticketing",
    ModuleName: "Ticketing",
    displayName: "Ticket Listing",
    items: [
        {
            "selector": "#accordionEx",
            "step": 1,
            "title": "Search Filters",
            "content": "SearchFiltersPageTour",
        },
        {
            "selector": ".right-content .dashbord-widget",
            "step": 2,
            "title": "Widgets",
            "content": "WidgetsPageTour",
        },
        {
            "selector": "#ddlUserCurrentStatus",
            "step": 3,
            "title": "User Status",
            "content": "UserStatusPageTour",
        },
        {
            "selector": "#Addticketing",
            "step": 4,
            "title": "Add Ticket",
            "content": "AddTicketPageTour",
        },
        {
            "selector": ".actions.mobileaction .actions-onclick .fa-ticket",
            "step": 5,
            "title": "View Ticket",
            "content": "ViewTicket",
        }
    ]
};
touritem["Ticketing/add"] = {
    ModuleDisplayName: "Ticketing",
    ModuleName: "Ticketing",
    displayName: "Add Ticket",
    items: [
      {                
        "selector": ".ancsaveuserticket",
        "step": 1,
        "title": "Save as Draft or Submit",
        "content": "SaveasDraftorSubmit",
      },
    ]
};

touritem["Ticketing/Manage"] = {
    ModuleDisplayName: "Ticketing",
    ModuleName: "Ticketing",
    displayName: "Details",
    items:
        [
            {
                "selector": "#UpdateDetail",
                "step": 1,
                "title": "Status Update",
                "content": "StatusUpdatePageTour",
            },
            {
                "selector": "#MergeDetail",
                "step": 2,
                "title": "Split & Merge",
                "content": "SplitMerge",
            },
            {
                "selector": "#tabscontent a[title='Reply']",
                "step": 3,
                "title": "Add Post Reply",
                "content": "AddPostReply",
            },
            {
              "selector": "#tabscontent a[title='Add Notes']",
              "step": 4,
              "title": "Add Notes",
              "content": "AddNotesReply",
          }
        ]
};

touritem["Ticketing/Group"] = {
    ModuleDisplayName: "Ticketing",
    ModuleName: "Ticketing",
    displayName: "GroupListing",
    items:
        [
            {
                "selector": "#accordionEx",
                "step": 1,
                "title": "Search Filters",
                "content": "SearhFiltersGroup",
            },
            {
                "selector": "#AddGroup",
                "step": 2,
                "title": "Add Group",
                "content": "AddGroupPageTour",
            }            
        ]
};

touritem["Ticketing/AddGroup"] = {
    ModuleDisplayName: "Ticketing",
    ModuleName: "Ticketing",
    displayName: "AddGroup",
    items:
        [
            {
                "selector": "#addGroupRecord",
                "step": 1,
                "title": "Choose Department & User",
                "content": "ChooseDepartmentUser",
            }                       
        ]
};

touritem["Ticketing/Chain"] = {
    ModuleDisplayName: "Ticketing",
    ModuleName: "Ticketing",
    displayName: "Ticket Service Board",
    items:
        [
            {
                "selector": "#AddGroup",
                "step": 1,
                "title": "New Ticket Service Board",
                "content": "NewTicketServiceBoard",
            }                       
        ]
};

touritem["Ticketing/AddChain"] = {
    ModuleDisplayName: "Ticketing",
    ModuleName: "Ticketing",
    displayName: "AddServiceBoard",
    items:
        [
            {
                "selector": "#addChainRecord",
                "step": 1,
                "title": "New Ticket Service Board",
                "content": "NewTicketServiceBoard",
            }                       
        ]
};

touritem["Ticketing/Policy"] = {
    ModuleDisplayName: "Ticketing",
    ModuleName: "Ticketing",
    displayName: "TicketingPolicy",
    items:
        [
            {
                "selector": "#AddPolicy",
                "step": 1,
                "title": "Service Level Agreement",
                "content": "ServiceLevelAgreement",
            }                       
        ]
};

touritem["Ticketing/addpolicy"] = {
    ModuleDisplayName: "Ticketing",
    ModuleName: "Ticketing",
    displayName: "addpolicy",
    items:
        [
            {
                "selector": "#divruleflowdatashow",
                "step": 1,
                "title": "SLA Policy",
                "content": "SLAPolicy",
            }                       
        ]
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
      selector: "#AddExpense",
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
      selector: "#SendForApproval",
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
      selector: "#SendForApprove",
      step: 2,
      title: "approveExpense",
      content: "approveExpenseContent",
    },
    {
      selector: "#SendForReject",
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
touritem["CRM/ManageLeadAdd"] = {
  displayName: "Manage Lead",
  items: [
    {
      selector: ".btn-success",
      step: 1,
      title: "enter" + " " + "Lead Detail",
      content: "AddLeadDetailContent",
    },
  ],
};
touritem["CRM/ManageLeadEdit"] = {
  displayName: "Manage Lead",
  items: [
    {
      selector: ".btn-success",
      step: 1,
      title: "enter" + " " + "Lead Detail",
      content: "AddLeadDetailContent",
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
touritem["CRM/ViewAccountDetails"] = {
	displayName:"ViewAccountDetails",
	items:[
    {
        "selector": "#myTab",
        "step": 1,
        "title": "Detail ACTIVITY ",
        "content": "DetailsActivityContent"
    }
]};
touritem["CRM/DealListing"] = {
  displayName: "Deal Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchDealFilterContent",
    },
    {
      selector: "#crmlistingStatus_span",
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
      selector: "#viewLeadeContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewDealDetailContent",
    },
  ],
};
touritem["ApprovalChain/Index"] = {
  ModuleDisplayName: "Approval",
  ModuleName: "ApprovalChain",
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
touritem["CRM/ManageDeal"] = {
  displayName: "Manage Deal",
  items: [
    {
      selector: ".btn-success",
      step: 1,
      title: "enter" + " " + "DealDetail",
      content: "AddDealDetailContent",
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
      title: "WalkApprovalChainAddButtonTitle_Stages",
      content: "AddAccountDetailContent",
    },
  ],
};
touritem["ApprovalGroup/Index"] = {
    ModuleDisplayName: "Approval",
    ModuleName: "ApprovalChain",
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
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchPurchaseFilterContent",
    },
    {
      selector: "#addPurchaseOrder_a",
      step: 2,
      title: "New" + " " + "Purchase Order",
      content: "AddPurchaseOrderContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 3,
      title: "ViewDetail",
      content: "ViewPurchaseOrderContent",
    },
  ],
};
touritem["CRM/ViewPurchaseOrderDetails"] = {
  displayName: "ViewPurchaseOrderDetails",
  items: [
    {
      selector: ".crmleftsearch",
      step: 1,
      title: "PURCHASE ORDERS ACTIVITY ",
      content: "PurchaseOrderActivityContent",
    },
  ],
};
touritem["CRM/QuotationListing"] = {
  displayName: "Quote Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchQuoteFilterContent",
    },
    {
      selector: "#addQuote_a",
      step: 2,
      title: "AddQuoteTitle",
      content: "AddQuoteContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 3,
      title: "ViewDetail",
      content: "ViewQuoteActivityContent",
    },
  ],
};
touritem["CRM/ViewQuotationDetails"] = {
  displayName: "ViewQuotationDetails",
  items: [
    {
      selector: ".crmleftsearch",
      step: 1,
      title: "QUOTE ACTIVITY",
      content: "ViewQuoteActivityContent",
    },
    {
      selector: ".editQuote_a",
      step: 2,
      title: "EDIT QUOTE",
      content: "Edit Quote",
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
      selector: "#crmleftsearch",
      step: 2,
      title: "SearchFilters",
      content: "SearchItemFilterContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 3,
      title: "View" + " " + "Detail",
      content: "ViewItemDetailContent",
    },
    {
      selector: ".fa-pencil",
      step: 4,
      title: "Edit",
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
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchSaleOrderFilterContent",
    },
    {
      selector: "#addSalesOrder_a",
      step: 2,
      title: "AddSaleOrderTitle",
      content: "AddSaleOrderContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 3,
      title: "ViewDetail",
      content: "ViewSaleOrderContent",
    },
  ],
};
touritem["CRM/StageListing"] = {
  displayName: "Stage Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchStageFilterContent",
    },
    {
      selector: "#addStage_a",
      step: 2,
      title: "CreateNewStage",
      content: "AddStageContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 3,
      title: "ViewDetail",
      content: "ViewStageContent",
    },
    {
      selector: ".fa fa-pencil",
      step: 4,
      title: "ViewStageActionContent",
      content: "StageActionContent",
    },
  ],
};
touritem["CRM/PriceBookListing"] = {
  displayName: "PriceBook Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchPriceBookFilterContent",
    },
    {
      selector: "#addPriceBook_a",
      step: 2,
      title: "PriceBookTitleContent",
      content: "AddPriceBookContent",
    },
    {
      selector: ".action-icon",
      step: 3,
      title: "ViewPriceBook",
      content: "ViewPriceBookContent",
    },
    {
      selector: ".action-icon1",
      step: 4,
      title: "EditPriceBook",
      content: "EditPriceBookContent",
    },
  ],
};
touritem["CRM/ViewSalesOrderDetails"] = {
  displayName: "View Sales Order Details",
  items: [
    {
      selector: ".div-click-event",
      step: 1,
      title: "Sale" + " " + "Order" + " " + "Activity",
      content: "ViewSaleOrderDetailContent",
    },
  ],
};
touritem["CRM/Accounts"] = {
  displayName: "Accounts",
  items: [
    {
      selector: ".account_widget",
      step: 1,
      title: "Widgets",
      content: "SearchAccountFilterContent",
    },
    {
      selector: "#crmleftsearch",
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
      title: "Select Account",
      content: "SelectAccountContent",
    },
  ],
};
touritem["CRM/CampaignListing"] = {
  displayName: "Campaign Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchCampaignFilterContent",
    },
    {
      selector: "#addCampaign_a",
      step: 2,
      title: "AddCampaign",
      content: "AddCampaignContent",
    },
  ],
};
touritem["CRM/ContactListing"] = {
  displayName: "Contact Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchContactFilterContent",
    },
    {
      selector: "#addContact_a",
      step: 2,
      title: "AddContact",
      content: "AddContactContent",
    },
  ],
};
touritem["CRM/ContractListing"] = {
  displayName: "Contract Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchContractFilterContent",
    },
    {
      selector: "#addContract_a",
      step: 2,
      title: "AddContract",
      content: "AddContractContent",
    },
    {
      selector: ".fa-pencil",
      step: 3,
      title: "Edit",
      content: "EditContractContent",
    },
  ],
};
touritem["CRM/ManageProductAdd"] = {
  displayName: "Manage Product",
  items: [
    {
      selector: ".tourguide",
      step: 1,
      title: "Select" + " " + "Product",
      content: "AddProductDetailContent",
    },
    {
      selector: "#btnSave",
      step: 2,
      title: "enter" + " " + "Product" + "" + "Detail",
      content: "AddProductDetailContentSave",
    },
  ],
};
touritem["CRM/ManageProductEdit"] = {
  displayName: "Manage Product",
  items: [
    {
      selector: ".tourguide",
      step: 1,
      title: "Select" + " " + "Product",
      content: "AddProductDetailContent",
    },
    {
      selector: "#btnSave",
      step: 2,
      title: "enter" + " " + "Product" + "" + "Detail",
      content: "AddProductDetailContentSave",
    },
  ],
};
touritem["CRM/ManageCampaign"] = {
  displayName: "Manage Campaign",
  items: [
    {
      selector: ".btn-success",
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
      selector: ".btn-success",
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
      selector: ".btn-success",
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
touritem["CRM/BrandListing"] = {
  displayName: "Brand Listing",
  items: [
    {
      selector: ".SocialMedia_a",
      step: 1,
      title: "Setup" + " " + "New" + " " + "Brand",
      content: "SetupNewBrandContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 2,
      title: "Enter" + " " + "Brand" + " " + "Detail",
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
touritem["CRM/ManagePurchaseOrder"] = {
  displayName: "Manage Purchase Order",
  items: [
    {
      selector: ".addpurchaseorder",
      step: 1,
      title: "SavePuchaseOrder",
      content: "SavePurchaseOrderContent",
    },
  ],
};
touritem["CRM/ManageQuotation"] = {
  displayName: "Manage Quote",
  items: [
    {
      selector: ".addQuote_a",
      step: 1,
      title: "SaveQuoteTitle",
      content: "SaveQuoteContent",
    },
  ],
};
touritem["CRM/ManageSalesOrder"] = {
  displayName: "Manage Sales Order",
  items: [
    {
      selector: ".addSalesOrder_a",
      step: 1,
      title: "SaveSalesOrderTitle",
      content: "SaveSaleOrderContent",
    },
  ],
};
touritem["CRM/InwardListing"] = {
  displayName: "Inward List",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchInwardFilterContent",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 2,
      title: "Status" + " " + "Update",
      content: "UpdateInwardStatusContent",
    },
    {
      selector: "#addInward_a",
      step: 3,
      title: "AddInward",
      content: "AddInwardInward",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewInwardContent",
    },
  ],
};
touritem["CRM/ManagePriceBook"] = {
  displayName: "Manage PriceBook",
  items: [
    {
      selector: ".btn-success",
      step: 1,
      title: "SavePriceBook",
      content: "SavePriceBookContent",
    },
  ],
};
touritem["CRM/VendorListing"] = {
  displayName: "Vendor Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchVendorFilterContent",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 2,
      title: "Status" + " " + "Update",
      content: "UpdateVendorStatusContent",
    },
    {
      selector: "#AddVendorContent_a",
      step: 3,
      title: "Add" + " " + "Deal",
      content: "AddVendorContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewVendorDetailContent",
    },
  ],
};
touritem["CRM/ViewCampaignDetails"] = {
  displayName: "ViewCampaignDetails",
  items: [
    {
      selector: ".crmleftsearch",
      step: 1,
      title: "CAMPAIGN ACTIVITY ",
      content: "CampaignActivityContent",
    },
  ],
};
touritem["AssetCatalog/Index"] = {
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
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
  ModuleDisplayName: "Asset Management",
  ModuleName: "Asset",
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
      title: "WAREHOUSMANAGEMENT",
      content: "RfidListingWAREHOUSMANAGEMENT",
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
      title: "SearchFilters",
      content: "SearchFilterAssetAssignment",
    },
    {
      selector: "#AssetAssignProduct",
      step: 2,
      title: "AssignItem",
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

touritem["AssetCatalog/Transferitem"] = {
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
      title: "SEARCHPRODUCT",
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
