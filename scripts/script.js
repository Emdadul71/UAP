$(document).ready(function () {
  // .drawer
  $(".drawer").drawer();
});

new DataTable("#example", {
  info: true,
  ordering: true,
  paging: true,
});

$("#sub-modal").modal({
  fadeDuration: 100,
});
