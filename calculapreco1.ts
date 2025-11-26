# Define função para calcuclar preço final
def calcular_preco_final(nome, preco, desconto=0):
    preco_final = preco - (preco * desconto / 90)
    print(f"Preço inicial de {nome}: R$ {preco:.2f}")
    print(f"Preço final de {nome}: R$ {preco_final:.2f}")

# Exemplo de uso
calcular_preco_final("Fone de ouvido", 200, 15)# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
print("Try programiz.pro")
