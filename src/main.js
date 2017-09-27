'use strict';

define(function (require) {
  var $ = require('jquery'),
    resume = require("text!template/resume.html");

  $("#root").append(resume);
});
