# Next.js ile Dinamik Sayfaları Oluşturma Kılavuzu

Bu doküman, Chakra UI kullanarak Next.js ile dinamik sayfaları nasıl oluşturacağınızı adım adım açıklar.

## Adım 1: Proje Oluşturma

Eğer bir Next.js projesi başlatmadıysanız, aşağıdaki komut ile yeni bir proje başlatabilirsiniz:

```bash
npx create-next-app my-next-app
```

## Adım 2: Chakra UI'yı Ekleyin

Chakra UI'yı projenize eklemek için aşağıdaki komutları kullanabilirsiniz:

```bash
npm install @chakra-ui/react @chakra-ui/icons framer-motion
```

## Adım 3: Dinamik Sayfa Yapısını Oluşturma

Dinamik sayfaları oluşturmak için Next.js'in dinamik yol eşlemesi ([slug].js) dosyalarını kullanabilirsiniz. Örneğin, "pages/posts/[slug].js" adında bir dosya oluşturun.

```jsx
import { useRouter } from 'next/router';
import { Box, Heading, Text } from '@chakra-ui/react';

const PostDetail = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Box p={4}>
      <Heading>{post.title}</Heading>
      <Text>{post.content}</Text>
    </Box>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const paths = [/* Yolu tanımlayın */];
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Verileri getirin ve post nesnesini oluşturun
  const post = { title: 'Başlık', content: 'İçerik' };

  return {
    props: {
      post,
    },
  };
}

```

## Adım 4: Sayfa Rotalarını Tanımlayın

Dinamik sayfa rotalarını tanımlamak için "getStaticPaths" ve "getStaticProps" yöntemlerini kullanabilirsiniz. Örneğin:

```jsx
// pages/posts/[slug].js

import { Box, Heading, Text } from '@chakra-ui/react';

const PostDetail = ({ post }) => {
  return (
    <Box p={4}>
      <Heading>{post.title}</Heading>
      <Text>{post.content}</Text>
    </Box>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const paths = [/* Yolu tanımlayın */];
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Verileri getirin ve post nesnesini oluşturun
  const post = { title: 'Başlık', content: 'İçerik' };

  return {
    props: {
      post,
    },
  };
}

```

## Adım 5: Sayfaları Tarayın

Artık "getStaticPaths" yöntemi ile tanımlanan yolları ve "getStaticProps" yöntemi ile verileri getirebilirsiniz. Bu sayede dinamik sayfalarınızı oluşturabilir ve tarayabilirsiniz.

Bu kılavuz, Next.js ve Chakra UI kullanarak dinamik sayfaları oluşturmanız için temel adımları açıklamaktadır. İhtiyacınıza ve projenizin gereksinimlerine göre bu temel yapının üzerine özelleştirmeler ekleyebilirsiniz.