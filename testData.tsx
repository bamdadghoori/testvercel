
export const testData=[
    {
      "blogPostID": 11,
      "title": "1",
      "metaDescription": "the charachterization test, unit testing, C# testing ",
      "categoryId": 2,
      "fullText": "\r\n\r\nWhat you need are Characterization Tests.\r\n\r\n    A characterization test is a test that characterizes the actual behavior of a piece of code.THere's no \"Well, it should do this\\\" or \"I think it does that.\" The tests document the actual current behavior of the system. (Feathers, Working Effectively with Legacy Code, 186)\r\n\r\nYou can use characterization tests to develop documentation for the code after - the - fact.This is not the preferred way of doing it, of course; it is better to write tests before writing code.But when you are dealing with a legacy codebase(and according to Feathers a legacy codebase doesn't have to be old—a brand new codebase has the same characteristics as an ancient one if it does not have tests) characterization tests are a great boon.\r\n  \r\n\r\n  Feathers says(186):\r\n\r\n\r\n      Here is a little algorithm for writing characterization tests:\r\n\r\n        Use a piece of code in a test harness.\r\n  \r\n\r\n          Write an assertion that you know will fail.\r\n  \r\n\r\n          Let the failure tell you what the behavior is.\r\n  \r\n\r\n          Change the test so that it expects the behavior that the code produces.\r\n  \r\n\r\n          Repeat\r\n  \r\n\r\n  Note that these tests are different that regular TDD tests in that they are not intended to describe what the codebase should do.They only describe what it does—which is exactly what you are wanting to determine.\r\n\r\n If, of course, you find that it does something wrong, you now have tests that allow you to change this behavior with TDD.You change the test to expect what you actually want, and then fix the code until it does that.\r\n\r\nFeathers has quite a detailed treatment of how to write such tests. He also discusses in other parts of his book how to get the code into a test harness in the first place(and thus he assumes it in step #1 above) but that goes beyond the scope of this question.",
      "creationDate": "2022-12-10T22:03:56.8711999",
      "lastModifiedDate": "2022-12-10T22:03:56.8712026",
      "userID": 1,
      "coverImageUrl": "/Pics/ax.jpg",
      "coverImageDescription": "pattern lover pic",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": false,
      "shortDescription": "The characterization test is very important for the handling new projects which ...",
      "isNoIndex": false,
      "estimatedReadingTime": "4 minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "Software"
    },
    {
      "blogPostID": 12,
      "title": "2",
      "metaDescription": "meta description",
      "categoryId": 3,
      "fullText": "this is full text ",
      "creationDate": "2022-12-12T16:10:29.3027192",
      "lastModifiedDate": "2022-12-12T00:00:00",
      "userID": 1,
      "coverImageUrl": "/uploads/a4bf9c3f-78b6-413f-8c53-ecf36684d1d3.png",
      "coverImageDescription": "cover image description",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": false,
      "shortDescription": "this is short description",
      "isNoIndex": false,
      "estimatedReadingTime": "five minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "Security"
    },
    {
      "blogPostID": 13,
      "title": "3",
      "metaDescription": "meta description",
      "categoryId": 4,
      "fullText": "this is full text ",
      "creationDate": "2022-12-12T16:10:29.3027192",
      "lastModifiedDate": "2022-12-12T00:00:00",
      "userID": 1,
      "coverImageUrl": "/uploads/a4bf9c3f-78b6-413f-8c53-ecf36684d1d3.png",
      "coverImageDescription": "cover image description",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": false,
      "shortDescription": "this is short description",
      "isNoIndex": false,
      "estimatedReadingTime": "five minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "Hardware"
    },
    {
      "blogPostID": 35,
      "title": "4",
      "metaDescription": "meta description",
      "categoryId": 5,
      "fullText": "this is full text ",
      "creationDate": "2022-12-12T16:10:29.3027192",
      "lastModifiedDate": "2022-12-12T00:00:00",
      "userID": 1,
      "coverImageUrl": "/uploads/a4bf9c3f-78b6-413f-8c53-ecf36684d1d3.png",
      "coverImageDescription": "cover image description",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": false,
      "shortDescription": "this is short description",
      "isNoIndex": false,
      "estimatedReadingTime": "five minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "UI/UX"
    },
    {
      "blogPostID": 36,
      "title": "5",
      "metaDescription": "meta description",
      "categoryId": 6,
      "fullText": "this is full text ",
      "creationDate": "2022-12-12T16:10:29.3027192",
      "lastModifiedDate": "2022-12-12T00:00:00",
      "userID": 1,
      "coverImageUrl": "/uploads/a4bf9c3f-78b6-413f-8c53-ecf36684d1d3.png",
      "coverImageDescription": "cover image description",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": false,
      "shortDescription": "this is short description",
      "isNoIndex": false,
      "estimatedReadingTime": "five minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "Artificial intelligence"
    },
    {
      "blogPostID": 40,
      "title": "6",
      "metaDescription": "meta description",
      "categoryId": 2,
      "fullText": "this is full text ",
      "creationDate": "2022-12-12T16:10:29.3027192",
      "lastModifiedDate": "2022-12-12T00:00:00",
      "userID": 1,
      "coverImageUrl": "/uploads/a4bf9c3f-78b6-413f-8c53-ecf36684d1d3.png",
      "coverImageDescription": "cover image description",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": true,
      "shortDescription": "this is short description",
      "isNoIndex": false,
      "estimatedReadingTime": "five minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "Software"
    },
    {
      "blogPostID": 41,
      "title": "7",
      "metaDescription": "meta description",
      "categoryId": 2,
      "fullText": "this is full text ",
      "creationDate": "2022-12-12T16:10:29.3027192",
      "lastModifiedDate": "2022-12-12T00:00:00",
      "userID": 1,
      "coverImageUrl": "/uploads/a4bf9c3f-78b6-413f-8c53-ecf36684d1d3.png",
      "coverImageDescription": "cover image description",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": false,
      "shortDescription": "this is short description",
      "isNoIndex": true,
      "estimatedReadingTime": "five minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "Software"
    },
    {
      "blogPostID": 42,
      "title": "8",
      "metaDescription": "meta description",
      "categoryId": 4,
      "fullText": "this is full text ",
      "creationDate": "2022-12-12T16:10:29.3027192",
      "lastModifiedDate": "2022-12-12T00:00:00",
      "userID": 1,
      "coverImageUrl": "/uploads/a4bf9c3f-78b6-413f-8c53-ecf36684d1d3.png",
      "coverImageDescription": "cover image description",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": false,
      "shortDescription": "this is short description",
      "isNoIndex": true,
      "estimatedReadingTime": "five minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "Hardware"
    },
    {
      "blogPostID": 49,
      "title": "9",
      "metaDescription": "meta description",
      "categoryId": 4,
      "fullText": "this is full text ",
      "creationDate": "2022-12-12T16:10:29.3027192",
      "lastModifiedDate": "2022-12-12T00:00:00",
      "userID": 1,
      "coverImageUrl": "/uploads/a4bf9c3f-78b6-413f-8c53-ecf36684d1d3.png",
      "coverImageDescription": "cover image description",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": false,
      "shortDescription": "this is short description",
      "isNoIndex": true,
      "estimatedReadingTime": "five minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "Hardware"
    },
    {
      "blogPostID": 50,
      "title": "10",
      "metaDescription": "meta description",
      "categoryId": 4,
      "fullText": "this is full text ",
      "creationDate": "2022-12-12T16:10:29.3027192",
      "lastModifiedDate": "2022-12-12T00:00:00",
      "userID": 1,
      "coverImageUrl": "/uploads/a4bf9c3f-78b6-413f-8c53-ecf36684d1d3.png",
      "coverImageDescription": "cover image description",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": false,
      "shortDescription": "this is short description",
      "isNoIndex": true,
      "estimatedReadingTime": "five minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "Hardware"
    },
    {
      "blogPostID": 51,
      "title": "11",
      "metaDescription": "meta description",
      "categoryId": 4,
      "fullText": "this is full text ",
      "creationDate": "2022-12-12T16:10:29.3027192",
      "lastModifiedDate": "2022-12-12T00:00:00",
      "userID": 1,
      "coverImageUrl": "/uploads/a4bf9c3f-78b6-413f-8c53-ecf36684d1d3.png",
      "coverImageDescription": "cover image description",
      "likesCount": 0,
      "viewCount": 0,
      "isVip": false,
      "isArchived": false,
      "isNoFollow": false,
      "shortDescription": "this is short description",
      "isNoIndex": true,
      "estimatedReadingTime": "five minutes",
      "authorName": "Sohrab Askarzadeh",
      "categoryName": "Hardware"
    }]