import React from 'react'

function Product() {
  return (
    <>product</>
  )
}

// getStaticPaths: Hangi dinamik yolların oluşturulacağını belirtiyoruz
export async function getStaticPaths() {
  const userData = {
    1: { name: 'John', age: 25 },
    2: { name: 'Jane', age: 30 },
    3: { name: 'Doe', age: 28 },
  };
  const paths = Object.keys(userData).map(id => ({
    params: { id },
  }));

  return { paths, fallback: false };
}

// getStaticProps: Her dinamik yol için veriyi getiriyoruz
export async function getStaticProps({ params }) {
  const user = userData[params.id];
  return { props: { user } };
}



export default Product