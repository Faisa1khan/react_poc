# Flow of Client-Side listing

```
                (Filter)                 (Pagination)
[Complete data] --------> [Filtered Data] -----------> [Data Rendering with Pagination]

```

## Filters
* Keyword based
* Sorting asc/desc
* Get records based on specific attribute values
* Get records based on some inequality


## Pagination
* totalPosts
* postsPerPage
* pageCount=Math.ceil(totalPosts/postsPerPage)
* activePage=2
* firstPostIndex=postsPerPage*(activePage-1)
* lastPostIndex=(postsPerPage*activePage)-1
