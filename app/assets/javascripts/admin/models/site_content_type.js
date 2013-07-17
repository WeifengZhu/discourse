/**
  Our data model that represents types of editing site content

  @class SiteContentType
  @extends Discourse.Model
  @namespace Discourse
  @module Discourse
**/
Discourse.SiteContentType = Discourse.Model.extend({});

Discourse.SiteContentType.reopenClass({
  findAll: function() {
    promise = new Em.Deferred();
    Discourse.ajax("/admin/site_content_types").then(function(data) {
      var contentTypes = Em.A();
      data.forEach(function (ct) {
        contentTypes.pushObject(Discourse.SiteContentType.create(ct));
      });
      promise.resolve(contentTypes);
    });
    return promise;
  }
});
