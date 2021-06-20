function get_wishlist_by_child_id() {
    var id = document.getElementById("paramId").value;
    fetch(`http://localhost:3000/wishlist/by-cid?child_id=${id}`, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
            <table>
                <tr>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Item_name</th>
                    <th>Price</th>
                    <th>Goal</th>
                </tr>`;

                data.forEach((item) => {
                    text += `
                        <tr>
                          <td>${item.type}</td>
                          <td>${item.category}</td>
                          <td>${item.item_name}</td>
                          <td>${item.price}</td>
                          <td>${item.goal}</td>
                        </tr>`;
                });
                text += "</table>";
                $(".mypanel").html(text);
            })
            .catch((error) => console.log("error", error));
    }                

