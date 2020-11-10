export = Importer;
/**
 * mysql-import - Importer class
 * @version 4.0.24
 * https://github.com/Pamblam/mysql-import
 */
declare class Importer {
    /**
     * new Importer(settings)
     * @param {host, user, password[, database]} settings - login credentials
     */
    constructor(settings: any);
    _connection_settings: any;
    _conn: any;
    _encoding: string;
    _imported: any[];
    /**
     * Get an array of the imported files
     * @returns {Array}
     */
    getImported(): any[];
    /**
     * Set the encoding to be used for reading the dump files.
     * @param string - encoding type to be used.
     * @throws {Error} - if unsupported encoding type.
     * @returns {undefined}
     */
    setEncoding(encoding: any): undefined;
    /**
     * Set or change the database to be used
     * @param string - database name
     * @returns {Promise}
     */
    use(database: any): Promise<any>;
    /**
     * Import (an) .sql file(s).
     * @param string|array input - files or paths to scan for .sql files
     * @returns {Promise}
     */
    import(...input: any[]): Promise<any>;
    /**
     * Disconnect mysql. This is done automatically, so shouldn't need to be manually called.
     * @param bool graceful - force close?
     * @returns {Promise}
     */
    disconnect(graceful?: boolean): Promise<any>;
    /**
     * Import a single .sql file into the database
     * @param {type} filepath
     * @returns {Promise}
     */
    _importSingleFile(filepath: any): Promise<any>;
    /**
     * Connect to the mysql server
     * @returns {Promise}
     */
    _connect(): Promise<any>;
    /**
     * Check if a file exists
     * @param string filepath
     * @returns {Promise}
     */
    _fileExists(filepath: any): Promise<any>;
    /**
     * Get filetype information
     * @param string filepath
     * @returns {Promise}
     */
    _statFile(filepath: any): Promise<any>;
    /**
     * Read contents of a directory
     * @param string filepath
     * @returns {Promise}
     */
    _readDir(filepath: any): Promise<any>;
    /**
     * Parses the input argument(s) for Importer.import into an array sql files.
     * @param strings|array paths
     * @returns {Promise}
     */
    _getSQLFilePaths(...paths: any[]): Promise<any>;
}
declare namespace Importer {
    const version: string;
}
