## Şirket Tablosu

### Tablo adı : `companies

| Alan Adı       | Tür       | Zorunluluk | Açıklama                 | Örnek Değer                         |
| -------------- | --------- | ---------- | ------------------------ | ----------------------------------- |
| `company_id`   | int       | Zorunlu    | Şirket kimliği (benzersiz)| Unique ID, sistem tarafından atanır |
| `name`         | varchar   | Zorunlu    | Şirket adı               | Şirket adı                          |
| `description`  | text      | Opsiyonel  | Şirket açıklaması        | Şirket açıklaması (isteğe bağlı)   |
| `location`     | varchar   | Zorunlu    | Şirket konumu            | Şirket konumu                       |
| `company_type` | varchar   | Zorunlu    | Şirket tipi              | Şirket tipi (örneğin: Teknoloji)    |
