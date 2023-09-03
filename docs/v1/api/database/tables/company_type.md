#### Company Type (Şirket Türü) Tablosu

### Tablo adı : `company_type`

| Alan Adı      | Tür       | Zorunluluk | Açıklama                     | Örnek Değer             |
| ------------- | --------- | ---------- | ---------------------------- | ----------------------- |
| `type_id`     | int       | Zorunlu    | Şirket türü kimliği (benzersiz)| Unique ID, sistem tarafından atanır |
| `type_name`   | varchar   | Zorunlu    | Şirket türü adı              | Şirket türü adı        |
| `description` | text      | Opsiyonel  | Şirket türü açıklaması       | Şirket türü açıklaması (isteğe bağlı)   |
