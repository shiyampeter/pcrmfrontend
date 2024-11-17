import dayjs from 'dayjs'
import * as yup from 'yup'
// // import CONSTANT from './constant-helper'
// import { uploadAccecpt } from './global-function'

// // export const mobileRegres = /^[0-9]\d{9}$/

// // export const nameRegres = /^[aA-zZ\s]+$/
// // export const pinCodeRegres = /^[0-9]{6}$/

// // export const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z^\s]{2,})+$/

// // const passwordRegExp = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
// // export const noNumbersReg = /^\d{1,10}$/

// type TypeKeys = 'recordingjam-studios' | 'music-instrument-sales-service' | 'music-studios'

// const whenStepIs = (expectedStep: string, schema: yup.AnySchema) => {
//   return yup
//     .mixed()
//     .when('type', ([type]: string[]) =>
//       type === expectedStep ? schema : yup.mixed().notRequired(),
//     )
// }

// const whenBusinessType = (
//   expectedStep: TypeKeys,
//   schema: yup.AnySchema,
//   elseSchema?: yup.AnySchema,
// ) => {
//   return yup
//     .mixed()
//     .when('business_type', ([business_type = '']: string[]) =>
//       String(business_type) === CONSTANT.BUSINESS_TYPE[expectedStep].toString()
//         ? schema
//         : elseSchema
//           ? elseSchema
//           : yup.mixed().notRequired(),
//     )
// }

// const whenBusinessTypeNotEqual = (expectedStep: TypeKeys, schema: yup.AnySchema) => {
//   return yup.mixed().when('business_type', ([business_type = '']: string[]) => {
//     return String(business_type) !== CONSTANT.BUSINESS_TYPE[expectedStep].toString()
//       ? schema
//       : yup.mixed().notRequired()
//   })
// }

// const whenStepIsNumber = (expectedSteps: string | string[], schema: yup.AnySchema) => {
//   return yup.mixed().when('business_type_slug', (business_type_slug) => {
//     const type = Array.isArray(business_type_slug) ? business_type_slug[0] : business_type_slug

//     if (Array.isArray(expectedSteps)) {
//       return expectedSteps.includes(type) ? schema : yup.mixed().notRequired()
//     }
//     return type === expectedSteps ? schema : yup.mixed().notRequired()
//   })
// }

// const businessSchema = yup.object().shape({
//   //About

//   business_name: whenStepIs(
//     'about',
//     yup.string().required('Business Name is required').matches(nameRegres, {
//       message: 'Numbers and Special characters are not allowed',
//       excludeEmptyString: false,
//     }),
//   ),
//   business_type: whenStepIs('about', yup.string().required('Select Business Type')),
//   established_year: whenStepIs('about', yup.string().required('Date is required')),
//   business_specialist: whenStepIs(
//     'about',
//     yup.array().min(1, 'Instrument types are required').required('Instrument types are required'),
//   ),
//   mobile: whenStepIs(
//     'about',
//     whenBusinessType(
//       'recordingjam-studios',
//       yup
//         .string()
//         .matches(mobileRegres, {
//           message: 'Please enter valid number.',
//           excludeEmptyString: false,
//         })
//         .required('Please enter valid number'),
//       yup.string().notRequired().matches(mobileRegres, {
//         message: 'Please enter valid number.',
//         excludeEmptyString: false,
//       }),
//     ),
//   ),
//   business_description: whenStepIs(
//     'about',
//     yup
//       .string()
//       // .max(500, "Description should be less than 500 character")
//       .required('Description is required'),
//   ),
//   price: whenStepIs(
//     'about',
//     whenBusinessType('recordingjam-studios', yup.mixed().required('Price is Required')),
//   ),
//   //About

//   //Services
//   highlights: whenStepIs(
//     'services',
//     whenBusinessType(
//       'music-studios',
//       yup.array().of(
//         yup.object().shape({
//           title: yup.string().required('Highlights Name is required'),
//           description: yup.string().required('Highlights Description is required'),
//         }),
//       ),
//     ),
//   ),

//   business_service_id: whenStepIs(
//     'services',
//     whenBusinessTypeNotEqual(
//       'music-instrument-sales-service',
//       yup.array().min(1, 'Service types are required').required('Service types are required'),
//     ).typeError('Service types are required'),
//   ),

//   equitments_id: whenStepIs(
//     'services',
//     whenBusinessType(
//       'music-studios',
//       yup.array().min(1, 'Equitments types are required').required('Equitments types are required'),
//     ).typeError('Equitments types are required'),
//   ),

//   gear_offered_id: whenStepIs(
//     'services',
//     whenBusinessType(
//       'recordingjam-studios',
//       yup.string().required('Gear offered is required').typeError('Gear offered is required'),
//       yup.string().notRequired(),
//     ),
//   ),

//   facilities: whenStepIs(
//     'services',
//     whenBusinessTypeNotEqual(
//       'music-instrument-sales-service',
//       yup
//         .array()
//         .of(
//           yup.object().shape({
//             title: yup.string().required('Facilities title is required'),
//           }),
//         )
//         .required('At least one Facilities is required'),
//     ),
//   ),

//   //Services

//   open_hours: whenStepIs(
//     'contact',
//     yup
//       .array()
//       .of(
//         yup.object().shape({
//           day_of_week: yup.string().required('Day of week is required'),
//           open_time: yup.string().required('Open time is required'),
//           close_time: yup
//             .string()
//             .test('is-greater', 'Close time must be after open time', function (close_time) {
//               const { open_time } = this.parent
//               const openTime = dayjs(open_time, CONSTANT.TIME_FORMAT).isValid()
//               const closeTime = dayjs(close_time, CONSTANT.TIME_FORMAT).isValid()
//               if (openTime && closeTime) {
//                 const todayOpenTime = dayjs(open_time, CONSTANT.TIME_FORMAT).set(
//                   'date',
//                   dayjs().get('D'),
//                 )
//                 const todayCloseTime = dayjs(close_time, CONSTANT.TIME_FORMAT).set(
//                   'date',
//                   dayjs().get('D'),
//                 )

//                 return dayjs(todayCloseTime).isAfter(todayOpenTime)
//               } else {
//                 return false
//               }
//             }),
//         }),
//       )
//       .required('At least one open hour is required'),
//   ),

//   city_id: whenStepIs('contact', yup.string().required('City is required')),
//   location_id: whenStepIs('contact', yup.mixed().required('Location is required')),
//   address_line_1: whenStepIs('contact', yup.string().required('Address 1 is required')),
//   address_line_2: whenStepIs('contact', yup.string().required('Address 2 is required')),
//   pincode: whenStepIs(
//     'contact',
//     yup.string().required('Pincode is required').matches(pinCodeRegres, 'Enter valid Pincode'),
//   ),

//   videos: whenStepIs(
//     'media',
//     yup.array().of(
//       yup.object().shape({
//         url: yup
//           .string()
//           .url('Enter valid URL')
//           .test('url-required', 'URL is required', function (value) {
//             const { thumbnail = '' } = this.parent // Access the `thumbnail` from the same object
//             return thumbnail !== '' ? (value ? true : false) : true // If thumbnail exists, validate URL
//           }), // URL is optional, but if present, it must be valid
//         thumbnail: yup
//           .mixed()
//           .test('thumbnail-required', 'Thumbnail is Required', function (value) {
//             const { url } = this.parent // Access the `url` from the same object
//             return url && url.trim() !== '' ? (value ? true : false) : true // If URL exists, validate thumbnail
//           }),
//       }),
//     ),
//     // .required("At least one video is required")
//     // .min(1, "At least one video is required")
//   ),
// })

// const artistAboutValidation = yup.object().shape({
//   profile_pic: yup
//     .mixed()
//     .required('Profile is required')
//     .test('fileFormat', 'Unsupported Format', (value) => {
//       const files = value as unknown as DocumentsType
//       if (files && files?.id) {
//         return false
//       } else {
//         return files && !uploadAccecpt.includes(files.type)
//       }
//     }),

//   artist_name: whenStepIs(
//     'about',
//     yup.string().required('Artist Name is required').matches(nameRegres, {
//       message: 'Numbers and Special characters are not allowed',
//       excludeEmptyString: false,
//     }),
//   ),
//   email: whenStepIs(
//     'about',
//     yup
//       .string()
//       .email('Invalid email format')
//       .required('Email is required')
//       .matches(emailRegExp, 'Invalid email format'),
//   ),
//   mobile: whenStepIs(
//     'about',
//     yup
//       .string()
//       .matches(mobileRegres, {
//         message: 'Please enter valid number.',
//         excludeEmptyString: false,
//       })
//       .min(10, 'Invalid Mobile Number')
//       .required('Mobile Number is Required'),
//   ),
//   artist_type: whenStepIs('about', yup.string().required('Select Artist specialist')),
//   artist_description: whenStepIs(
//     'about',
//     yup
//       .string()
//       .max(300, 'Description should be less than 300 character')
//       .required('Description is required'),
//   ),
//   // perform_languages: whenStepIs(
//   //   "about",
//   //   yup
//   //     .array()
//   //     .min(1, "At least one perform language must be selected")
//   //     .required("Instrument types are required")
//   // ),
//   instrument_type: whenStepIs(
//     'about',
//     yup
//       .array()
//       .min(1, 'At least one instrument type must be selected')
//       .required('Instrument types are required'),
//   ),
//   perform_genere: whenStepIs(
//     'about',
//     yup
//       .array()
//       .min(1, 'At least one Genre must be selected')
//       .required('Instrument types are required'),
//   ),
//   // prefered_events: whenStepIs(
//   //   "about",
//   //   yup
//   //     .array()
//   //     .min(1, "At least one Events must be selected")
//   //     .required("Instrument types are required")
//   // ),

//   city_id: whenStepIs('about', yup.string().required('City is Required')),
//   location_id: whenStepIs('about', yup.string().required('Location is Required')),
//   pincode: whenStepIs(
//     'about',
//     yup.string().required('Pincode is Required').matches(pinCodeRegres, 'Enter valid Pincode'),
//   ),

//   // location_id: whenStepIs("about", yup.string().required("Location is Required")),
//   // recognitions: whenStepIs(
//   //   "recognition",
//   //   yup
//   //     .array()
//   //     .of(
//   //       yup.object().shape({
//   //         title: yup.string().required("Recognition Title is required"),
//   //         description: yup.string().required("Description is required"),
//   //         date: yup.string().required("Date is required"),
//   //       })
//   //     )
//   //     .required("At least one recognition is required")
//   // ),

//   // live_online_description: yup.string().required("Description is required"),
//   // home_pickup_description:yup.string().required("Description is required"),
//   // distance_service_description:yup.string().required("Description is required"),

//   // documents: whenStepIs(
//   //   "media",
//   //   yup
//   //     .array()
//   //     .min(1, "At least one instrument type must be selected")
//   //     .required("Instrument types are required")
//   // ),

//   // videos: whenStepIs(
//   //   "media",
//   //   yup
//   //     .array()
//   //     .of(
//   //       yup.object().shape({
//   //         url: yup.string().required("Video URL is required"),
//   //         thumbnail: yup.mixed().required("Thumbnail URL is required"),
//   //       })
//   //     )
//   //     .required("At least one video is required")
//   //     .min(1, "At least one video is required")
//   // ),
//   videos: whenStepIs(
//     'media',
//     yup.array().of(
//       yup.object().shape({
//         url: yup
//           .string()
//           .url('Enter valid URL')
//           .test('url-required', 'URL is required', function (value) {
//             const { thumbnail = '' } = this.parent // Access the `thumbnail` from the same object
//             return thumbnail !== '' ? (value ? true : false) : true // If thumbnail exists, validate URL
//           }),
//         thumbnail: yup
//           .mixed()
//           .test('thumbnail-required', 'Thumbnail is Required', function (value) {
//             const { url } = this.parent // Access the `url` from the same object
//             return url && url.trim() !== '' ? (value ? true : false) : true // If URL exists, validate thumbnail
//           }),
//       }),
//     ),
//     // .required("At least one video is required")
//     // .min(1, "At least one video is required")
//   ),
// })

// const artistEnquiryValidation = yup.object().shape({
//   city_id: yup.string().required('City is required'),

//   event_type: yup.string().required('Select Event sType'),
//   guest_count: yup.string().required('Enter Guest Count').matches(noNumbersReg, {
//     message: 'Please enter valid number.',
//     excludeEmptyString: false,
//   }),
//   // from_date: yup.mixed().required("From Date is required")
//   // from_date: yup.mixed().required("From Date is required"),

//   from_date: yup.string().required('From Date is required'),
//   // to_date: yup
//   //   .string()
//   //   .test(
//   //     "is-greater",
//   //     "To Date must be After From Date",
//   //     function (to_date) {
//   //       const { from_date } = this.parent;
//   //       const fromDate = dayjs(
//   //         from_date,
//   //         CONSTANT.DATE_FORMAT
//   //       ).isValid();
//   //       const toDate = dayjs(
//   //         to_date,
//   //         CONSTANT.DATE_FORMAT
//   //       ).isValid();
//   //       if (fromDate && toDate) {

//   //         return dayjs(toDate).isAfter(fromDate);
//   //       } else {
//   //         return false;
//   //       }
//   //     }
//   //   ).required("To Date is Required"),
//   to_date: yup
//     .string()
//     .test('is-greater', 'To Date must be After From Date', function (to_date) {
//       const { from_date } = this.parent
//       const fromDate = dayjs(from_date, CONSTANT.DATE_FORMAT)
//       const toDate = dayjs(to_date, CONSTANT.DATE_FORMAT)
//       if (fromDate.isValid() && toDate.isValid()) {
//         return toDate.isAfter(fromDate)
//       } else {
//         return false
//       }
//     })
//     .required('To Date is Required'),
//   remarks: yup.string().required('Remarks Required'),
// })

// const businessEnquiryValidation = yup.object().shape({
//   customer_name: yup.string().required('Customer Name is required'),

//   service_required: whenStepIsNumber('music-studios', yup.string().required('Service is required')),
//   repair_type_offered: whenStepIsNumber(
//     'music-instrument-sales-service',
//     yup.string().required('Select Repair Type'),
//   ),
//   gear_required: whenStepIsNumber(
//     'recordingjam-studios',
//     yup.string().required('Select Gear Type'),
//   ),
//   remarks: yup.string().required('Enter Remarks'),

//   contact: yup
//     .string()
//     .matches(mobileRegres, {
//       message: 'Please enter valid number.',
//       excludeEmptyString: false,
//     })
//     .min(10, 'Invalid Mobile Number')
//     .required('Mobile Number is Required'),
//   location_id: yup.string().required('Location is Required'),
//   availability: whenStepIsNumber(
//     ['music-studios', 'recordingjam-studios'],
//     yup.array().min(1, 'At least one date must be selected').required('Date is required'),
//   ),
// })

// const reviewValidation = yup.object().shape({
//   review: yup.string().required('Review is required'),
// })

// const shareUpdateValidation = yup.object().shape({
//   title: yup.string().required('Title is required'),
//   description: yup.string().required('Description is required'),
// })

// const requestSchema = yup.object().shape({
//   password: yup
//     .string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters')
//     .max(40, 'Password must not exceed 40 characters')
//     .matches(passwordRegExp, {
//       message: 'Use alphabets, special characters and numbers',
//       excludeEmptyString: false,
//     }),
//   confirmPassword: yup
//     .string()
//     .required('Confirm Password is required')
//     .oneOf([yup.ref('password'), ''], 'Confirm Password does not match')
//     .matches(passwordRegExp, {
//       message: 'Use alphabets, special characters and numbers',
//       excludeEmptyString: false,
//     }),
// })

// const changePasswordSchema = yup.object().shape({
//   currentPassword: yup
//     .string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters')
//     .max(40, 'Password must not exceed 40 characters'),
//   // .matches(passwordRegExp, {
//   //   message: "Use alphabets, special characters and numbers",
//   //   excludeEmptyString: false,
//   // }),
//   password: yup
//     .string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters')
//     .max(40, 'Password must not exceed 40 characters')
//     .matches(passwordRegExp, {
//       message: 'Use alphabets, special characters and numbers',
//       excludeEmptyString: false,
//     }),
//   confirmPassword: yup
//     .string()
//     .required('Confirm Password is required')
//     .oneOf([yup.ref('password'), null as never], 'Confirm Password does not match')
//     .matches(passwordRegExp, {
//       message: 'Use alphabets, special characters and numbers',
//       excludeEmptyString: false,
//     }),
// })

// const formSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email('Invalid email format')
//     .required('Email ID is required')
//     .matches(emailRegExp, 'Invalid email format'),
// })

const workCategorySchema = yup.object().shape({
  work_name: yup.string().required('Work Name is required'),
  work_type: yup.string().required('Work Type is required'),

  work_tracking_no: yup
    .string()

    .required('Tracking Number is required'),
  work_tracking_website: yup.string().required('Tracking Website is required'),
})

const workSubCategorySchema = yup.object().shape({
  sub_work_cate_id: yup.string().required('Category is required'),
  sub_work_cate_name: yup.string().required('SubCategory Name is required'),

  status_id: yup
    .string()

    .required('Status is required'),
  //   sub_work_expense_price: yup.object().shape({
  //     isFixed: yup
  //       .number()
  //       .oneOf([0, 1]) // Ensures the value is either 0 or 1
  //       .default(0),
  //     amount: yup.string().when('isFixed', {
  //       is: (value) => value === 1, // Ensure value is resolved correctly
  //       then: yup
  //         .string()
  //         .required('Price is required')
  //         .matches(/^\d+(\.\d{1,2})?$/, 'Enter a valid price'), // Validates numeric format
  //       otherwise: yup.string(), // No validation if `isFixed` is not 1
  //     }),

  //     //   work_tracking_website: yup.string().required('Tracking Website is required'),
  //   }),
  //   sub_work_online_price: yup.object().shape({
  //     isFixed: yup
  //       .number()
  //       .oneOf([0, 1]) // Ensures the value is either 0 or 1
  //       .default(0),

  //     amount: yup.string().when('isFixed', {
  //       is: (value) => value === 1, // Ensure value is resolved correctly
  //       then: yup
  //         .string()
  //         .required('Price is required')
  //         .matches(/^\d+(\.\d{1,2})?$/, 'Enter a valid price'), // Validates numeric format
  //       otherwise: yup.string(), // No validation if `isFixed` is not 1
  //     }),
  //   }),
  //   sub_work_work_price: yup.object().shape({
  //     isFixed: yup
  //       .number()
  //       .oneOf([0, 1]) // Ensures the value is either 0 or 1
  //       .default(0),

  //     amount: yup.string().when('isFixed', {
  //       is: (value) => value === 1, // Ensure value is resolved correctly
  //       then: yup
  //         .string()
  //         .required('Price is required')
  //         .matches(/^\d+(\.\d{1,2})?$/, 'Enter a valid price'), // Validates numeric format
  //       otherwise: yup.string(), // No validation if `isFixed` is not 1
  //     }),
  //   }),
})
const workStatusSchema = yup.object().shape({
  status: yup.string().required('Status is required'),
})
// const loginSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email('Invalid email format')
//     .required('Email ID is required')
//     .matches(emailRegExp, 'Invalid email format'),
//   password: yup.string().required('Password is required'),
// })

// const accountInformationSchema = yup.object().shape({
//   first_name: yup
//     .string()
//     .required('First Name is required')
//     .matches(/^[aA-zZ\s]+$/, 'Numbers are not allowed'),
//   // lastName: yup.string().required('Last name is required'),
//   last_name: yup
//     .string()
//     .required('Last Name is required')
//     .matches(/^[aA-zZ\s]+$/, 'Numbers are not allowed'),
//   email: yup
//     .string()
//     .email('Invalid email format')
//     .required('Email ID is required')
//     .matches(emailRegExp, 'Invalid email format'),
//   mobile_no: yup
//     .string()
//     .matches(mobileRegres, {
//       message: 'Please enter valid number.',
//       excludeEmptyString: false,
//     })
//     .min(10, 'Invalid Mobile Number')
//     .required('Mobile No is required'),
// })

export {
  //   businessSchema,
  //   artistAboutValidation,
  //   artistEnquiryValidation,
  //   businessEnquiryValidation,
  //   requestSchema,
  //   formSchema,
  //   registerSchema,
  //   loginSchema,
  //   shareUpdateValidation,
  //   changePasswordSchema,
  //   reviewValidation,
  //   accountInformationSchema,
  workStatusSchema,
  workCategorySchema,
  workSubCategorySchema,
}
