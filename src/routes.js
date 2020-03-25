import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'
import Resume from './components/Resume'

export default [
  { path: '/', component: ShowBlogs },
  { path: '/add',component: AddBlog },
  { path: '/blog/:id',component: SingleBlog },
  { path: '/edit/:id',component: EditBlog },
  { path: '/resume',component: Resume }
]
