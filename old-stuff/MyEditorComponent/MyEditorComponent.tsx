import React from 'react'
import * as wpElement from '@wordpress/element'
import * as wpBlocks from '@wordpress/blocks'

import {
  BlockEditorProvider,
  BlockList,
  BlockTools,
  WritingFlow,
  ObserveTyping,
} from '@wordpress/block-editor';
import { SlotFillProvider, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
// '<!-- --><p>para</p><!-- -->'
const testElement = wpElement.createElement('div',null,'Hello there')
const testBlocks = [
  {
    name: 'test/test-block',
    clientId: 'a',
    innerBlocks: [],
    attributes: { foo: 1 },
    content: '<!-- wp:paragraph --><p>paragraph text</p><!-- /wp:paragraph -->'
  },
];
const exampleContent =  [
  {
    blockName: "core/columns",
    attrs: {
      columns: 3,
    },
    innerBlocks: [
      {
        blockName: "core/column",
        attrs: null,
        innerBlocks: [
          {
            blockName: "core/paragraph",
            attrs: null,
            innerBlocks: [],
            innerHTML: "\n<p>Left</p>\n",
          },
        ],
        innerHTML: '\n<div class="wp-block-column"></div>\n',
      },
      {
        blockName: "core/column",
        attrs: null,
        innerBlocks: [
          {
            blockName: "core/paragraph",
            attrs: null,
            innerBlocks: [],
            innerHTML: "\n<p><strong>Middle</strong></p>\n",
          },
        ],
        innerHTML: '\n<div class="wp-block-column"></div>\n',
      },
      {
        blockName: "core/column",
        attrs: null,
        innerBlocks: [],
        innerHTML: '\n<div class="wp-block-column"></div>\n',
      },
    ],
    innerHTML: '\n<div class="wp-block-columns has-3-columns">\n\n\n\n</div>\n',
  },
]
const rawContent = '<!-- wp:paragraph --><p>paragraph text</p><!-- /wp:paragraph -->'
const MyEditorComponent: React.FunctionComponent = (props) => {
  const [blocks, updateBlocks] = useState([]);

  return (
    <BlockEditorProvider
      value={blocks}
      onInput={(blocks) => updateBlocks(blocks)}
      onChange={(blocks) => updateBlocks(blocks)}
    >
      <SlotFillProvider>
        
        <BlockTools>
          <WritingFlow>
            <ObserveTyping>
              <BlockList />
              <p>Placeholder</p>
            </ObserveTyping>
          </WritingFlow>
        </BlockTools>
        <Popover.Slot />
      </SlotFillProvider>
    </BlockEditorProvider>
  );
}

export default MyEditorComponent
// Make sure to load the block editor stylesheets too
// import '@wordpress/components/build-style/style.css';
// import '@wordpress/block-editor/build-style/style.css';
