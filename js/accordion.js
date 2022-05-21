$( function() {
  $( ".accordion" ).accordion({
    heightStyle: 'content',
    header: '> .accordion__item > .accordion__title',
    active:false,
    collapsible:true
  });
} );
