// Exemplo de campos para o Modal de Nova Transação
<form onSubmit={handleSubmit} className="space-y-4">
  {/* Descrição e Valor */}
  <div>
    <label className="block text-sm font-medium">Descrição</label>
    <input type="text" name="description" required className="w-full border p-2 rounded" />
  </div>

  <div>
    <label className="block text-sm font-medium">Valor (R$)</label>
    <input type="number" step="0.01" name="amount" required className="w-full border p-2 rounded" />
  </div>

  {/* Tipo de Transação */}
  <div>
    <label className="block text-sm font-medium">Tipo</label>
    <select name="type" className="w-full border p-2 rounded">
      <option value="RECEITA">Receita</option>
      <option value="DESPESA">Despesa</option>
    </select>
  </div>

  {/* Categoria Personalizada */}
  <div>
    <label className="block text-sm font-medium">Categoria</label>
    <select name="category" className="w-full border p-2 rounded">
      <option value="Consultoria">Consultoria</option>
      <option value="Treinamento">Treinamento</option>
      <option value="Serviços Laboratoriais">Serviços Laboratoriais</option>
      <option value="Software/Sistemas">Software / Sistemas</option>
      <option value="Operacional">Custos Operacionais</option>
      <option value="Outros">Outros</option>
    </select>
  </div>

  {/* Forma de Pagamento */}
  <div>
    <label className="block text-sm font-medium">Forma de Pagamento</label>
    <select name="paymentMethod" className="w-full border p-2 rounded">
      <option value="PIX">Pix</option>
      <option value="CARTAO_CREDITO">Cartão de Crédito</option>
      <option value="CARTAO_DEBITO">Cartão de Débito</option>
      <option value="BOLETO">Boleto Bancário</option>
      <option value="DINHEIRO">Dinheiro / Transferência</option>
    </select>
  </div>

  <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
    Salvar Transação
  </button>
</form>






