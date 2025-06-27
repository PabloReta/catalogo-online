import pandas as pd

# Nombre del archivo Excel
archivo_excel = "catalogo_consolidado.xlsx"  # Asegurate de que esté en la misma carpeta que este script
df = pd.read_excel(archivo_excel, sheet_name="Hoja1")

# Renombrar columnas
df = df.rename(columns={
    "COD.R": "COD_R",
    "COD.P": "COD_P",
    "DESCRIPCION": "DESCRIPCION",
    "P.RAM": "P_RAM",
    "DESC MAX": "DESC_MAX",
    "P.FINAL": "P_FINAL",
    "IMAGEN": "IMAGEN",
    "MOSTRAR": "MOSTRAR"
})

# Filtrar solo los que dicen "SI"
df_filtrado = df[df["MOSTRAR"].astype(str).str.upper().str.strip() == "SI"]

# Convertir precios a números y redondear
for col in ["P_RAM", "P_FINAL"]:
    df_filtrado[col] = pd.to_numeric(df_filtrado[col], errors='coerce').round(2).fillna(0).astype(str)

# Guardar como JSON
df_filtrado.to_json("productos.json", orient="records", force_ascii=False, indent=2)

print("✅ Archivo JSON generado correctamente como 'productos.json'")
