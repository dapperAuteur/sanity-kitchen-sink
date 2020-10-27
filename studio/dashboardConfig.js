export default {
  widgets: [
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
                  buildHookId: '5f97778302b06e393a33db26',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5gabhzn3',
                  apiId: '35f69644-605d-4140-965d-cb3678faed5e'
                },
                {
                  buildHookId: '5f977783521fc230df946aae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-u4u23cis',
                  apiId: '230738cf-94b3-4542-a019-71f4ce659bbd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dapperAuteur/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-u4u23cis.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
