function showDropdown(dropdownId) {
    var input = document.getElementById(dropdownId + 'Input');
    var dropdownContent = document.getElementById(dropdownId + 'DropdownContent');
    
    if (input.value.trim() !== '') {
      dropdownContent.style.display = 'block';
    } else {
      dropdownContent.style.display = 'none';
    }
  }
  