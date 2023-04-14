import React,{ useEffect } from "react";
import Prism from "prismjs";

import "../css/demo.css";

import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/toolbar/prism-toolbar.css';

function usePrismHighlightAll() {
    useEffect(() => {
      Prism.highlightAll()
    }, [])
  }
export default function CodeProp(props) {
    usePrismHighlightAll(); 
    return (
        <pre class={`language-${props.lang}`}>
        <code>{`${props.code}`}
</code> </pre>
    )
}
