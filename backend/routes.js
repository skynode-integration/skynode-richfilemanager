'use strict';

const express = require('express');
const filemanager = require( "rich-filemanager-node" );

module.exports = function(app) {
	const root = app.get("root");
	const config = root + '/frontend/config/filemanager.config.json';
	const wk = root + '';

    app.use('/connectors/node/filemanager.node',filemanager(wk, config ) );
};