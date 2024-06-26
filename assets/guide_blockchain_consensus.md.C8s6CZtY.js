import{_ as e,c as t,o as s,V as o}from"./chunks/framework.p90Iz9wz.js";const m=JSON.parse('{"title":"Consensus","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/consensus.md","filePath":"guide/blockchain/consensus.md","lastUpdated":1719408637000}'),a={name:"guide/blockchain/consensus.md"},n=o('<h1 id="consensus" tabindex="-1">Consensus <a class="header-anchor" href="#consensus" aria-label="Permalink to &quot;Consensus&quot;">​</a></h1><p>Each time you send a transaction to Iroha, it gets put into a queue. When it&#39;s time to produce a new block, the queue is emptied, and the consensus process begins. This process is equal parts common sense and black magic<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><p>The mundane aspect is that a special set of peers needs to take the transaction queue and reproduce the same world state. If the world state cannot be reproduced for some reason or another, none of the transactions get committed to a block.</p><p>The consensus starts over from scratch by choosing a different special set of peers. This is where the black magic comes in. There is a number of things that are fine-tuned: the number of peers in the voting process, the way in which subsequent voting peers are chosen, and the way in which the peers communicate that consensus has failed. Because this changes the view of the world, the process is called a <em>view change</em>. The exact reason for why the view was changed is encoded in the <em>view change proof</em>, but decoding that information is an advanced topic that we won&#39;t cover here.</p><p>The reasoning behind this algorithm is simple: if someone had some evil peers and connected them to the existing network, if they tried to fake data, some good™ peers would not get the same (evil™) world state. If that&#39;s the case, the evil™ peers would not be allowed to participate in consensus, and you would eventually produce a block using only good™ peers.</p><p>As a natural consequence, if any changes to the world state are made without the use of ISI, the good™ peers cannot know of them. They won&#39;t be able to reproduce the hash of the world state, and thus consensus will fail. The same thing happens if the peers have different instructions.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>For prospective wizards, the <a href="https://github.com/hyperledger/iroha/blob/iroha2-dev/docs/source/iroha_2_whitepaper.md" target="_blank" rel="noreferrer">Iroha 2 Whitepaper</a> is a good start. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',8),i=[n];function r(c,h,d,p,l,u){return s(),t("div",null,i)}const g=e(a,[["render",r]]);export{m as __pageData,g as default};
