export default function DbMenu() {

    // ここにDBデータ参照からのループ文設計を考える
    let i = 0
    let index = 6;
    const commerce = new Array();
    const title = '富士山';
    const description = '初冬の日の出時間にのみ訪れる幻想的な富士山の風景。山頂には綺麗な雪化粧。';
    const imgUrl = '/a763fd8f-5604-48cc-942c-c7d3280cd8d4_l.jpg';
    let price = '500';
    const itemLabel = 'AMERICANO';
  
    for(i=0; i<index; i++){
      commerce[i] = {
        imgUrl,
        title,
        description,
        price,
        itemLabel,
      }
    }
  
  return commerce
}  