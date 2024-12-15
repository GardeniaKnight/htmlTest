let selectedCar = null;
let selectedAccessory = [];

function selectCar(carModel) {
    selectedCar = carModel;
    alert(`您选择的汽车是: ${carModel}`);
}

function selectAccessory(accessory) {
    if (selectedAccessory.includes(accessory)) {
        selectedAccessory = selectedAccessory.filter(item => item !== accessory);
        alert(`您已取消选择配件: ${accessory}`);
    } else {
        selectedAccessory.push(accessory);
        alert(`您选择的配件是: ${accessory}`);
    }
}

function confirmPurchase() {
    if (!selectedCar) {
        alert("请先选择一款汽车！");
        return;
    }

    let accessoriesList = selectedAccessory.length > 0 ? selectedAccessory.join(", ") : "无";
    alert(`您选择的汽车是: ${selectedCar}\n选择的配件有: ${accessoriesList}\n确认购买吗？`);
}

document.addEventListener('DOMContentLoaded', function() {
  // 获取所有车型和配件项
  const carItems = document.querySelectorAll('.car-item');
  const accessoryItems = document.querySelectorAll('.accessory-item');

  // 为每个项添加点击事件
  carItems.forEach(item => {
    item.addEventListener('click', function() {
      // 切换选中状态
      this.classList.toggle('selected');
    });
  });

  accessoryItems.forEach(item => {
    item.addEventListener('click', function() {
      // 切换选中状态
      this.classList.toggle('selected');
    });
  });
});