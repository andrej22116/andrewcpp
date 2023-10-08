<?php

function get_file_hash(string $filePath) : string {
	return hash_file('md5', $filePath);
}