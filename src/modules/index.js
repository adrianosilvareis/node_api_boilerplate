import handles from './handles'
import sample from './sample'

const modules = [handles, sample]

export default app => modules.forEach(lib => lib(app))
