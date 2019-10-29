export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'puregear-test-studio',
                  apiId: '98e799f2-fa59-4d50-8549-9b52f09b17dc'
                },
                {
                  buildHookId: '5db7bd8aea984a415921d1ed',
                  title: 'Events Website',
                  name: 'puregear-test',
                  apiId: '35390ac1-64d5-414d-ba63-b476f605cd29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BryantFukushima/puregear-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://puregear-test.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
