import {
  BlockEditorProvider,
  BlockList,
  BlockTools,
  WritingFlow,
  ObserveTyping,
} from '@wordpress/block-editor';
import { SlotFillProvider, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';

function MyEditorComponent() {
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
            </ObserveTyping>
          </WritingFlow>
        </BlockTools>
        <Popover.Slot />
      </SlotFillProvider>
    </BlockEditorProvider>
  );
}

// Make sure to load the block editor stylesheets too
// import '@wordpress/components/build-style/style.css';
// import '@wordpress/block-editor/build-style/style.css';
