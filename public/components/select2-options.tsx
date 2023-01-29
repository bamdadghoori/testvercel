export const tags: any[] = [
  { value: "c-sharp", label: "c-sharp" },
  { value: "internet", label: "internet" },
  { value: "software", label: "software" },
];

export const sortOptionsForBlogs: any[] = [
  {
    value: "default",
    label: "Default",
    field: "blogPostID",
    isDescending: false,
  },
  {
    value: "titleA",
    label: "Title (Ascending)",
    isDescending: false,
    field: "title",
  },
  {
    value: "titleD",
    label: "Title (Descending)",
    isDescending: true,
    field: "title",
  },
  {
    value: "authorNameA",
    label: "Author (Ascending)",
    isDescending: false,
    field: "authorName",
  },
  {
    value: "authorNameD",
    label: "Author (Descending)",
    isDescending: true,
    field: "authorName",
  },
  {
    value: "categoryNameA",
    label: "Category (Ascending)",
    isDescending: false,
    field: "categoryName",
  },
  {
    value: "categoryNameD",
    label: "Category (Descending)",
    isDescending: true,
    field: "categoryName",
  },
  {
    value: "lastModifiedDateA",
    label: "Last modified date (Ascending)",
    isDescending: false,
    field: "lastModifiedDate",
  },
  {
    value: "lastModifiedDateD",
    label: "Last modified date (Descending)",
    isDescending: true,
    field: "lastModifiedDate",
  },
  {
    value: "creationDateA",
    label: "Creation date (Ascending)",
    isDescending: false,
    field: "creationDate",
  },
  {
    value: "creationDateD",
    label: "Creation date (Descending)",
    isDescending: true,
    field: "creationDate",
  },
];

export const thForBlogs: any[] = [
  { value: "title", label: "Title", isDescending: false, field: "title" },

  {
    label: "Author",

    field: "authorName",
  },

  {
    label: "Category",

    field: "categoryName",
  },

  {
    label: "Last modified date",

    field: "lastModifiedDate",
  },

  {
    label: "Creation date",

    field: "creationDate",
  },
];
export const thForComments: any[] = [
  {
    label: "Writer",
    field: "writerName",
  },

  {
    label: "Text",
    field: "text",
  },
];

export const thforContactMessages: any[] = [
  {
    label: "Email",

    field: "email",
  },

  {
    label: "Subject",

    field: "subject",
  },

  {
    label: "Created date",

    field: "createdTime",
  },
];
export const sortOptionsForContactMessages: any[] = [
  { value: "default", label: "Default", field: "id", isDescending: false },
  {
    value: "emailA",
    label: "Email (Ascending)",
    isDescending: false,
    field: "email",
  },
  {
    value: "emailD",
    label: "Email (Descending)",
    isDescending: true,
    field: "email",
  },
  {
    value: "subjectA",
    label: "Subject (Ascending)",
    isDescending: false,
    field: "subject",
  },
  {
    value: "subjectD",
    label: "Subject (Descending)",
    isDescending: true,
    field: "subject",
  },
  {
    value: "createdDateA",
    label: "Created date (Ascending)",
    isDescending: false,
    field: "createdTime",
  },
  {
    value: "createdDateD",
    label: "Created date (Descending)",
    isDescending: true,
    field: "createdTime",
  },
];

export const sortOptionsForComments: any[] = [
  {
    value: "default",
    label: "Default",
    field: "commentId",
    isDescending: false,
  },
  {
    value: "writerA",
    label: "Writer (Ascending)",
    field: "writerName",
    isDescending: false,
  },
  {
    value: "writerD",
    label: "Writer (Descending)",
    field: "writerName",
    isDescending: true,
  },
  {
    value: "textA",
    label: "Text (Ascending)",
    field: "text",
    isDescending: false,
  },
  {
    value: "textD",
    label: "Text (Descending)",
    field: "text",
    isDescending: true,
  },
];

export const thForUsers:any[]=[
  {
    label: "Email",

    field: "Email",
  },
  {
    label: "Name",

    field: "Name",
  },
  {
    label: "Phone",

    field: "Phone",
  },
]

export const defaultTag = { value: "tags", label: "Tags" };
export const booleanOptions = [
  { value: "true", label: "True" },
  { value: "false", label: "False" },
];
export const defaultNofollow = { value: "noFollow", label: "Is no follow" };
export const defaultNoIndex = { value: "noIndex", label: "Is no index" };
export const defaultArchived = { value: "archived", label: "Is archived" };
export const defaultVip = { value: "vip", label: "Is vip" };

export const capitalizeFirstLetter = (title: string) => {
  return title.charAt(0).toUpperCase() + title.slice(1);
};
