export async function addReservation(urlReservation, itemId,username,date_start,date_end) {
  await fetch(urlReservation, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": itemId,
      "username": username,
      "date_start": date_start,
      "date_end": date_end      
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
  })
}

export async function getReservation(urlReservation,item1) {
  urlReservation += `?item_id=${item1}`
  let data = await fetch(urlReservation);
   const response = await data.json();
   return response;
}
