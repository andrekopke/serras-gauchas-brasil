---
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const guides = await getCollection('guides');
  return guides.map(guide => ({
    params: { slug: guide.slug },
    props: { guide },
  }));
}
const { guide } = Astro.props;
const { Content } = await guide.render();
---

<Layout title={guide.data.title}>
  <article class="max-w-2xl mx-auto px-6 py-10 md:py-16 font-sans text-gray-800">
    
    <div class="mb-4">
        <span class="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
            {guide.data.type}
        </span>
    </div>
    
    <h1 class="text-2xl md:text-3xl font-extrabold mb-6 leading-tight text-black tracking-tight">
      {guide.data.title}
    </h1>
    
    <div class="mb-10">
        <img src={guide.data.heroImage} class="w-full h-auto rounded-sm shadow-sm" alt={guide.data.title} />
    </div>

    <div class="prose prose-base md:prose-lg max-w-none 
                text-gray-700
                prose-p:leading-7 prose-p:mb-8
                prose-headings:text-black prose-headings:font-bold
                prose-h2:text-xl md:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-lg md:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-li:mb-2 prose-ul:mb-8
                prose-hr:border-t prose-hr:border-gray-200 prose-hr:my-10
                prose-blockquote:bg-blue-50 prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:p-6 prose-blockquote:rounded-r-sm prose-blockquote:not-italic prose-blockquote:my-10 prose-blockquote:text-blue-900 shadow-sm">
      <Content />
    </div>

  </article>
</Layout>
