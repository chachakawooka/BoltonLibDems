const cheerio = require('cheerio')
const fetch = require('node-fetch');
const crypto = require('crypto')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions



    // Create nodes here, generally by downloading data
    // from a remote API.
    const data = await fetch('https://www.libdems.org.uk/manifesto').then(res => res.text())
    const $ = cheerio.load(data)

    $('a.issues-card').each(function (i, elem) {
        let id = $(this).attr('href').replace('/','');
        let title = $(this).find('h3').text()
        let subTitle = $(this).find('.gold-t').text()
        let image = $(this).find('img').attr('src')

        fieldData = {
            title: title,
            subTitle: subTitle,
            image: image,
            url: id
        }

        createNode({
            title: title,
            subTitle: subTitle,
            image: image,
            id: 'manifesto::'+id,
            parent: null, // or null if it's a source node without a parent
            children: [],
            internal: {
                type: `Manifesto`,
                contentDigest: crypto
                    .createHash(`md5`)
                    .update(JSON.stringify(fieldData))
                    .digest(`hex`),
            }
        })
    });
    return
}

exports.onCreateNode = async ({
    node,
    actions,
    createNodeId,
    store,
    cache,
  }) => {
    //console.log(node)
    const { createNodeField, createNode } = actions
    if (node.internal.type === 'Manifesto') {
      try {
        const fileNode = await createRemoteFileNode({
          url: node.image,
          store,
          cache,
          createNode,
          createNodeId,
        })
        createNodeField({
          node,
          name: 'localFile___NODE',
          value: fileNode.id,
          parent: node.id,
        })
      } catch (err) {
        console.log(err)
      }
    }
  }