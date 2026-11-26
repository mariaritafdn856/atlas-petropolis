// Categorias de análise do Atlas (TFG, p. 15) e camadas do mapa de cada conjunto.
// Para adicionar uma camada: copie um bloco de CAMADAS, mude id/nome/cat e aponte "arquivo" para um GeoJSON.
// Exporte do QGIS em GeoJSON, sistema EPSG:4326 (WGS 84), e salve na pasta geo/ do repositório.
// "{id}" no nome do arquivo vira o número do conjunto (ex.: geo/1-trajetorias.geojson é só do conjunto 1).
// Camadas sem arquivo aparecem como "sem dados" até o GeoJSON existir.

const CATEGORIAS = [
  { id: 'temporal', n: '01', nome: 'Temporalidades e políticas habitacionais', cor: '#e8a5bb' },
  { id: 'inser',    n: '02', nome: 'Inserção urbana e acessibilidade',         cor: '#8db6e8' },
  { id: 'vuln',     n: '03', nome: 'Vulnerabilidades socioespaciais e ambientais', cor: '#e3be78' },
  { id: 'desl',     n: '04', nome: 'Deslocamentos e trajetórias de vida',      cor: '#86cfb0' },
  { id: 'tipo',     n: '05', nome: 'Tipologias e transformações das moradias', cor: '#b9a3ee' }
];

const CAMADAS = [
  // ---- 01 Temporalidades ----
  { id: 'outros', cat: 'temporal', nome: 'Demais conjuntos do inventário', tipo: 'conjuntos', ligada: true,
    leitura: 'Compara este conjunto com os outros do inventário: cor pela década de implantação, tamanho pelo número de unidades. Mostra se o empreendimento está isolado ou próximo de outros reassentamentos.' },
  { id: 'desastres', cat: 'temporal', nome: 'Áreas atingidas pelos desastres', arquivo: 'geo/{id}-desastres.geojson',
    estilo: { color: '#e8a5bb', weight: 1.5, fillOpacity: 0.25 },
    leitura: 'Permite ver a distância entre o lugar onde as famílias perderam a casa e o lugar onde foram reassentadas, e relacionar o desastre de origem ao ano de entrega.' },

  // ---- 02 Inserção urbana ----
  { id: 'raio', cat: 'inser', nome: 'Raios de 500 m e 1 km', tipo: 'raios', ligada: true,
    leitura: 'Referência de escala para o entorno imediato. Os círculos são apenas geométricos (não consideram o relevo nem o caminho real a pé) e servem de base para medir o que está perto ou longe.' },
  { id: 'transporte', cat: 'inser', nome: 'Transporte público', arquivo: 'geo/transporte.geojson',
    estilo: { color: '#8db6e8', radius: 5 },
    leitura: 'Paradas e linhas de ônibus ajudam a avaliar o acesso ao trabalho, à escola e ao centro, e o tempo real de deslocamento a partir do conjunto.' },
  { id: 'equipamentos', cat: 'inser', nome: 'Equipamentos e serviços', arquivo: 'geo/equipamentos.geojson',
    estilo: { color: '#bcd4f2', radius: 5 },
    leitura: 'Escolas, postos de saúde, comércio e espaços comunitários mostram o que o entorno oferece e o que faltou na implantação.' },

  // ---- 03 Vulnerabilidades ----
  { id: 'hidrografia', cat: 'vuln', nome: 'Hidrografia', arquivo: 'geo/hidrografia.geojson',
    estilo: { color: '#5f86c9', weight: 1.2 },
    leitura: 'Rios e córregos próximos indicam a relação do conjunto com as águas e com as áreas de inundação.' },
  { id: 'risco', cat: 'vuln', nome: 'Áreas de risco', arquivo: 'geo/areas-risco.geojson',
    estilo: { color: '#e3be78', weight: 1.5, fillOpacity: 0.3 },
    leitura: 'Mostra se o reassentamento ficou fora ou perto de áreas de risco mapeadas, uma das perguntas centrais do Atlas.' },
  { id: 'declividade', cat: 'vuln', nome: 'Declividade', arquivo: 'geo/declividade.geojson',
    estilo: { color: '#c9a45a', weight: 1, fillOpacity: 0.3 },
    leitura: 'O relevo condiciona a implantação, o acesso a pé e a suscetibilidade a deslizamentos.' },
  { id: 'vegetacao', cat: 'vuln', nome: 'Cobertura vegetal e desmatamento', arquivo: 'geo/vegetacao.geojson',
    estilo: { color: '#9bc06e', weight: 1, fillOpacity: 0.3 },
    leitura: 'Indica pressão sobre áreas verdes no entorno e mudanças na cobertura desde a implantação.' },

  // ---- 04 Deslocamentos ----
  { id: 'trajetorias', cat: 'desl', nome: 'Origem e destino das famílias', arquivo: 'geo/{id}-trajetorias.geojson',
    estilo: { color: '#86cfb0', weight: 2, radius: 6 },
    leitura: 'Linhas e pontos entre a moradia de origem e o conjunto. Mostram rupturas territoriais, distâncias e as redes de pertencimento que foram mantidas ou perdidas.' },

  // ---- 05 Tipologias ----
  { id: 'tipologias', cat: 'tipo', nome: 'Ampliações e transformações', arquivo: 'geo/{id}-tipologias.geojson',
    estilo: { color: '#b9a3ee', weight: 1.5, fillOpacity: 0.3 },
    leitura: 'Compara o projeto original com o que os moradores construíram depois: ampliações, autoconstrução e estratégias de permanência.' }
];
