import{_ as s,E as a,c as i,J as n,V as e,o as r}from"./chunks/framework.p90Iz9wz.js";const _=JSON.parse('{"title":"Assets","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/assets.md","filePath":"guide/blockchain/assets.md","lastUpdated":1719408637000}'),o={name:"guide/blockchain/assets.md"},d=e('<h1 id="assets" tabindex="-1">Assets <a class="header-anchor" href="#assets" aria-label="Permalink to &quot;Assets&quot;">​</a></h1><p>Iroha has been built with few underlying assumptions about what the assets need to be.</p><p>The assets can be <strong>fungible</strong> (every £1 is exactly the same as every other £1) or <strong>non-fungible</strong> (a £1 bill signed by the Queen of Hearts is not the same as a £1 bill signed by the King of Spades).</p><p>The assets can also be <strong>mintable</strong> (you can make more of them) and <strong>non-mintable</strong> (you can only specify their initial quantity in the <a href="/iroha-2-docs/guide/configure/genesis.html">genesis block</a>).</p><h2 id="value-types" tabindex="-1">Value Types <a class="header-anchor" href="#value-types" aria-label="Permalink to &quot;Value Types&quot;">​</a></h2><p>Additionally, the assets have different underlying value types. Specifically, we have <code>AssetValueType.Quantity</code>, which is effectively an unsigned 32-bit integer, a <code>BigQuantity</code>, which is an unsigned 128-bit integer, and <code>Fixed</code>, which is a positive (though signed) 64-bit fixed-precision number with nine significant digits after the decimal point. All three types can be registered as either <strong>mintable</strong> or <strong>non-mintable</strong>.</p><p>There is also the <code>Store</code> asset type, which is used for storing key-values in object&#39;s metadata. We talk in detail about <code>Store</code> asset in the chapter related to <a href="./metadata.html">metadata</a>.</p><h2 id="asset-structure" tabindex="-1">Asset Structure <a class="header-anchor" href="#asset-structure" aria-label="Permalink to &quot;Asset Structure&quot;">​</a></h2>',8),c=e('<h2 id="instructions" tabindex="-1">Instructions <a class="header-anchor" href="#instructions" aria-label="Permalink to &quot;Instructions&quot;">​</a></h2><p>Assets can be <a href="./instructions.html#un-register">registered</a>, <a href="./instructions.html#mint-burn">minted or burned</a>, and transferred.</p><p>Refer to one of the language-specific guides to walk you through the process of registering and minting assets in a blockchain:</p><ul><li><a href="/iroha-2-docs/guide/get-started/bash.html#_5-registering-and-minting-assets">Bash</a></li><li><a href="/iroha-2-docs/guide/get-started/rust.html#_5-registering-and-minting-assets">Rust</a></li><li><a href="/iroha-2-docs/guide/get-started/kotlin-java.html#_5-registering-and-minting-assets">Kotlin/Java</a></li><li><a href="/iroha-2-docs/guide/get-started/python.html#_5-registering-and-minting-assets">Python</a></li><li><a href="/iroha-2-docs/guide/get-started/javascript.html#_5-registering-and-minting-assets">JavaScript/TypeScript</a></li></ul>',4);function l(h,u,A,g,f,m){const t=a("MermaidRenderWrap");return r(),i("div",null,[d,n(t,{id:"mermaid_a3d76a1e8c22e2a4fec3e81161936e15807e50db5c7561e99c8404dda107b2ce13905a63e504fe8025fbd017689351a498e9e84078c427fce5506985540c3a9e",text:"classDiagram%0A%0Aclass%20Asset%0Aclass%20AssetDefinition%0A%0Aclass%20Id%20%7B%0A%20%20definition_id%0A%20%20account_id%0A%7D%0A%0Aclass%20Mintable%20%7B%0A%20%20%3C%3Cenumeration%3E%3E%0A%20%20Infinitely%0A%20%20Once%0A%20%20Not%0A%7D%0A%0Aclass%20AssetValue%20%7B%0A%20%20%3C%3Cenumeration%3E%3E%0A%20%20Quantity%0A%20%20BigQuantity%0A%20%20Fixed%0A%20%20Store%0A%7D%0A%0AAsset%20--%20AssetDefinition%0AAsset%20--%20Id%0AAssetDefinition%20--%20Mintable%0AAssetDefinition%20--%20AssetValue%20%0AAssetDefinition%20--%20Id%0A%0AAsset%20%3A%20id%20%7BId%7D%0AAsset%20%3A%20value%0A%0AAssetDefinition%20%3A%20id%20%7BId%7D%0AAssetDefinition%20%3A%20value_type%20%7BAssetValueType%7D%0AAssetDefinition%20%3A%20mintable%20%7BMintable%7D%0AAssetDefinition%20%3A%20metadata"}),c])}const b=s(o,[["render",l]]);export{_ as __pageData,b as default};
