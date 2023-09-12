import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'childApp1',
    entry: 'http://localhost:8889',
    container: '#routeContent',
    // activeRule: location => location.hash.startsWith('#/micro/child1'),
    activeRule: '/micro/child1'
  },
], {
  beforeLoad: (app) => console.log('before load', app.name),
  beforeMount: [(app) => console.log('before mount', app.name)],
})

start()