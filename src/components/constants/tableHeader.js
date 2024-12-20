export const ROLES_HEADER = [
    { label: 'Code ID', align: 'left', width: '25%', id: 'id' },
    { label: 'Tag', align: 'left', id: 'name' },
    { label: 'Status', align: 'left', id: 'status' },
    { label: 'Action', align: 'left', width: '2%', id: 'action' },
];
export const DIRECTORY_HEADER = [
    { label: 'S.No', align: 'left', id: 'id' },
    { label: 'Product Name', align: 'left', id: 'first_name' },
    { label: 'Category', align: 'left', id: 'last_name' },
    { label: 'Cost', align: 'left', id: 'phone_number' },
    { label: 'Product Name', align: 'left', id: 'first_name' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
export const TASKLIST_HEADER = [
    { label: 'Date', align: 'left', id: 'date' },
    { label: 'Job Type', align: 'left', id: 'shift' },
    { label: 'Job Title', align: 'left', id: 'time' },
    { label: 'Location', align: 'left', id: 'days' },
    { label: 'Assigned To', align: 'left', id: 'assigned_to' },
    { label: 'Assigned By', align: 'left', id: 'assigned_by' },
    { label: 'Status', align: 'left', id: 'status', width: '150px' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
export const CUSTOMER_HEADER = [
    { label: 'S.No', align: 'left', id: 'id' },
    { label: 'First Name', align: 'left', id: 'first_name' },
    { label: 'Last Name', align: 'left', id: 'last_name' },
    { label: 'Email ID', align: 'left', id: 'email' },
    { label: 'Mobile', align: 'left', id: 'mobile' },
    // { label: "Address", align: "left", id: "address" },
    // { label: "Country", align: "left", id: "country" },
    // { label: "Zip Code", align: "left", id: "zip_code" },
    { label: 'Status', align: 'left', id: 'zip_code' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
export const FORMS_HEADER = [
    { label: 'Forms', align: 'left', id: 'name' },
    { label: 'Date Created', align: 'left', id: 'created_at' },
    { label: 'Details', align: 'left', width: '2%', id: 'action' },
];
export const PERMISSION_HEADER = [
    { label: 'Access Details', align: 'left', id: 'accessdetails' },
    { label: 'Create', align: 'left', id: 'create' },
    { label: 'Read', align: 'left', id: 'read' },
    { label: 'Update', align: 'left', id: 'update' },
    { label: 'Delete', align: 'left', id: 'delete' },
];
export const INVOICE_HEADER = [
    { label: 'Date', align: 'left', id: 'date' },
    { label: 'Employee Name', align: 'left', id: 'employee_name' },
    { label: 'Invoice Number', align: 'left', id: 'invoice_number' },
    // { label: 'Jobs', align: 'left', id: 'jobs' },
    // { label: 'Quick Task', align: 'left', id: 'quick_task' },
    { label: 'Amount', align: 'left', id: 'amount' },
    { label: 'Status', align: 'left', id: 'status' },
    { label: 'Actions', align: 'left', id: 'action' },
];
export const PRODUCT_HEADER = [
    { label: 'S.No', align: 'left', id: 'id' },
    { label: 'Product Name', align: 'left', id: 'product_name' },
    { label: 'Category', align: 'left', id: 'quantity' },
    { label: 'Weight in Grams', align: 'left', id: 'weight' },
    { label: 'Price', align: 'left', id: 'price' },
    { label: 'Product Description', align: 'left', id: 'description' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
export const PROMOTION_HEADER = [
    { label: 'S.No', align: 'left', id: 'id' },
    { label: 'Name', align: 'left', id: 'name' },
    { label: 'Cost', align: 'left', id: 'startdate' },
    { label: 'Percentage', align: 'left', id: 'enddate' },
    { label: 'Promotion cost', align: 'left', id: 'status' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
export const PROMOTIONRELATED_HEADER = [
    { label: 'S.No', align: 'left', id: 'id' },
    { label: 'Name', align: 'left', id: 'name' },
    { label: 'Cost', align: 'left', id: 'startdate' },
    { label: 'Percentage', align: 'left', id: 'enddate' },
    { label: 'Promotion cost', align: 'left', id: 'status' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
export const CATEGORY_HEADER = [
    { label: 'S.No', align: 'left', id: 'id' },
    { label: 'Work Name', align: 'left', id: 'work_name' },
    { label: 'Work Type', align: 'left', id: 'work_type' },
    { label: 'Work Tracking No', align: 'left', id: 'work_tracking_no' },
    { label: 'Work_Tracking_Website', align: 'left', id: 'work_tracking_website' },
    { label: 'Work Completed', align: 'left', id: 'work_completed' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
export const IECMINI_HEADER = [
    { label: 'S.No', align: 'left', id: 'id' },
    { label: 'Category Name', align: 'left', id: 'work_cate' },
    { label: 'SubCategory Name', align: 'left', id: 'sub_cate' },
    { label: 'Name', align: 'left', id: 'name' },
    { label: 'Completed Status', align: 'left', id: 'status_name' },
    { label: 'Work Type', align: 'left', id: 'work_type' },
    { label: 'Status Name', align: 'left', id: 'status_name' },
    { label: 'Mobile', align: 'left', id: 'mobile' },
    { label: 'Amount', align: 'left', id: 'amount' },
    { label: 'Expense', align: 'left', id: 'expense' },
    { label: 'Office Expense', align: 'left', id: 'office_expense' },
    { label: 'Discount', align: 'left', id: 'discount' },
    { label: 'Profit', align: 'left', id: 'income' },
    { label: 'Payment Status', align: 'left', id: 'payment_status' },
    { label: 'Online Payment GoThrough', align: 'left', id: 'online_payment_go_through' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
export const STATUS_HEADER = [
    { label: 'S.No', align: 'left', id: 'id' },
    { label: 'Status Name', align: 'left', id: 'status_name' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
export const CATEGORY_SUB_HEADER = [
    { label: 'S.No', align: 'left', id: 'id' },
    { label: 'Category', align: 'left', id: 'category' },
    { label: 'Sub Category Name', align: 'left', id: 'sub_category' },
    { label: 'Work Price', align: 'left', id: 'work_price' },
    { label: 'Online Price', align: 'left', id: 'online_price' },
    { label: 'Expense Price', align: 'left', id: 'expense_price' },
    { label: 'Discount Type', align: 'left', id: 'discount_type' },
    { label: 'Incentive type', align: 'left', id: 'incentive_type' },
    { label: 'Validity Type', align: 'left', id: 'validity_type' },
    { label: 'Validity Count', align: 'left', id: 'validity_count' },
    { label: 'Alert Type', align: 'left', id: 'alert_type' },
    { label: 'Alert Days', align: 'left', id: 'alert_days' },
    { label: 'Status', align: 'left', id: 'status' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
export const ORDER_HEADER = [
    { label: 'S.No', align: 'left', id: 'id' },
    { label: 'Date', align: 'left', id: 'date' },
    { label: 'Order No', align: 'left', id: 'order_no' },
    // { label: "Invoice No", align: "left", id: "invoice_no" },
    { label: 'Customer Type', align: 'left', id: 'customer_type' },
    { label: 'Customer Name', align: 'left', id: 'customer_name' },
    { label: ' Amount', align: 'left', id: 'amount' },
    // { label: " Total Tax", align: "left", id: "total_tax" },
    // { label: " Total weight", align: "left", id: "total_weight" },
    // { label: " Courier Name", align: "left", id: "courier_name" },
    { label: 'Shipping Cost', align: 'left', id: 'shipping_cost' },
    { label: 'Grand Total', align: 'left', id: 'grand_total' },
    { label: 'Order status', align: 'left', id: 'status' },
    { label: 'Payment Status', align: 'left', id: 'payment_status' },
    { label: 'Actions', align: 'left', id: 'actions' },
];
