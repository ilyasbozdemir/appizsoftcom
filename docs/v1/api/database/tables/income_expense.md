### Gelir/Gider (Income/Expense) Tablosu

### Tablo adı : `income_expense`

| Alan Adı          | Tür       | Açıklama                                       | Örnek Değer                          |
| ----------------- | --------- | ---------------------------------------------- | ------------------------------------ |
| `transaction_id`  | int       | İşlem kimliği (benzersiz)                     | unique id, sistem belirler bunu      |
| `customer_id`     | int       | İlgili müşterinin kimliği                      | Müşteri kimliği                      |
| `type`            | string    | İşlem türü (gelir/gider)                      | "Gelir" veya "Gider"                |
| `date`            | date      | İşlem tarihi                                  | İşlem tarihi (örn. "2023-08-30")   |
| `amount`          | decimal   | İşlem tutarı                                  | İşlem tutarı (örn. 1000.50)         |
| `description`     | string    | İşlem açıklaması                              | İşlem açıklaması                     |
| `invoice_id`      | int       | İlgili fatura veya fişin kimliği              | Fatura veya fişin kimliği            |
| `is_approved`     | boolean   | İşlem onay durumu (onaylı/onaysız)           | true veya false                      |
| `approval_date`   | date      | İşlem onay tarihi (isteğe bağlı)             | İşlem onay tarihi (örn. "2023-08-30")|
| `notes`           | string    | İşlem notları (isteğe bağlı)                 | İşlem notları                        |
