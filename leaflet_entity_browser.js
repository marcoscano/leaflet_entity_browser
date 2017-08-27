(function ($) {

  Drupal.behaviors.leaflet_entity_browser = {
    attach: function (context, settings) {

      $("img.leaflet-marker-icon").on('click', function(e) {
        var rowId, markerClasses, $this = $(this);
        markerClasses = $this.attr('class').split(/\s+/);
        $.each(markerClasses, function(index, item) {
          if (item.substring(0, 17) === 'leb-marker-rowid-') {
            rowId = item.slice(17);
          }
        });
        if (rowId !== undefined) {
          var $browserCheckbox = $(".entity-browser-checkboxes input[name='entity_browser_select[" + rowId + "]'");
        }
        if (!$this.hasClass("leaflet-entity-browser-marker-selected")) {
          $this.addClass("leaflet-entity-browser-marker-selected");
          $this.attr('src', drupalSettings.leaflet_entity_browser.selected_icon_url);
          if ($browserCheckbox) {
            $browserCheckbox.prop("checked", true);
          }
        }
        else {
          $this.removeClass("leaflet-entity-browser-marker-selected");
          $this.attr('src', drupalSettings.leaflet_entity_browser.icon_url);
          if ($browserCheckbox) {
            $browserCheckbox.prop("checked", false);
          }
        }
      });

    }
  };

})(jQuery);
