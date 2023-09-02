## JSON Web Token (JWT) Kullanımı

Kimlik doğrulama işlemleri sırasında JSON Web Token (JWT) kullanılır. JWT, kullanıcı oturumlarını yönetmek ve yetkilendirmek için kullanılır.

### JWT Nedir?

JWT, JSON formatında verileri içeren ve dijital olarak imzalanmış bir token türüdür. Genellikle üç bölümden oluşur: Başlık (Header), İçerik (Payload) ve İmza (Signature). Bu tokenler, verilerin güvenli bir şekilde taşınmasını ve doğrulanmasını sağlar.

### JWT Oluşturma

Kullanıcı girişi (login) işlemi sırasında, sunucu tarafından bir JWT oluşturulur. Bu token, kullanıcının oturumunu temsil eder ve bir süre boyunca geçerlidir. JWT içerisinde kullanıcının kimlik bilgileri ve yetkilendirmesi gibi bilgiler bulunabilir.

Örnek JWT Oluşturma:

```json
Header: {
  "alg": "HS256",
  "typ": "JWT"
}

Payload: {
  "user_id": 123,
  "username": "kullanici_adi",
  "roles": ["user", "admin"],
  "exp": 1677645323
}

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
  
```

### Signature (İmza)

İmza, JWT'nin bütünlüğünü ve güvenilirliğini doğrulamak için kullanılır. İmza, Header ve Payload kullanılarak oluşturulur.

### JWT Örneği

```jwt
eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJzdWIiOiAiMTIzNDU2Nzg5MCIsICJuYW1lIjogIkpvaG4gRG9lIiwgImlhdCI6IDE1MTYyMzkwMjJ9.7J5X03YyJswEXEBe1eU69vEXtJ9-XoIC8bJDwKueFgk
```

### JWT Kullanımı

Kullanıcı, JWT tokenini her istek gönderdiğinde sunucuya iletilir. Sunucu bu tokeni çözerek kullanıcının kimliğini ve yetkilerini doğrular. Tokenin geçerliliği ve süresi sunucu tarafından kontrol edilir.

### JWT Güvenliği

JWT'ler, gizli bir anahtar (secret key) kullanılarak imzalanır. Bu, tokenin bütünlüğünü korur ve manipülasyona karşı korur. Anahtarın gizli ve güvende tutulması önemlidir.

JWT'lerin güvenliği için bazı en iyi uygulama yönergeleri şunlar olabilir:

- Güçlü bir anahtar kullanımı.
- Token süresinin sınırlı ve makul olması.
- Özel bilgilerin (örneğin parola) JWT içinde saklanmaması.
- Güncel kütüphanelerin ve algoritmaların kullanılması.

Daha fazla bilgi için [JWT](https://jwt.io/) resmi sitesini ziyaret edin.
