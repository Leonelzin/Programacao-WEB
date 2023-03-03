<form method="POST" action="processar-form.php">

    <div>
        <form>
            <span>Preencha suas principais dúvidas e curiosidades sobre esse Tubarãozaum:</span>
            <input type="text" /> 
        </form>
    </div>
  
    <p>O Nosso conteúdo sobre megalodonte agrada você em que nível?</p>
    <p>
      <label>
        <input type="radio" name="avaliacao" value="excelente"> Excelente
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="avaliacao" value="bom"> Bom
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="avaliacao" value="regular"> Regular
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="avaliacao" value="ruim"> Ruim
      </label>
    </p>
    <p>
      <label for="comentario">Comentário:</label>
      <textarea id="comentario" name="comentario"></textarea>
    </p>
  
    <div>
      <span>Você concorda com os Termos de uso da Página?</span>
      <input type="checkbox" /> 
    </div>
  
    <p>
      <input type="submit" value="Enviar">
    </p>
  </form>
