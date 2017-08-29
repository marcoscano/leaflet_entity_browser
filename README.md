# leaflet_entity_browser

**THIS IS NOT PRODUCTION READY**

This code is a proof-of-concept of a tool to use Entity Browser with a Leaflet map as view widget. It was created for demonstration purposes only.

To make this work, you need to apply the following patches to the Leaflet drupal module (if the issues are not fixed already):

- https://www.drupal.org/node/2852506#comment-12157626
- https://www.drupal.org/node/2904954#comment-12236645
- https://www.drupal.org/node/2904707#comment-12235364

Then add an `entity_browser` display to the view as usual, and select "**Leaflet map for Entity Browser**" as the view style plugin.

Configure your map display as usual (add a geofield field, define title / description fields if necessary, etc), and add the "Entity Browser Bulk Select Form" field to the list of fields as well.
