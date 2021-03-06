// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.core')

/**
 * Directive to go to user profile on click.
 *
 * @module mm.core
 * @ngdoc provider
 * @name mmUserLink
 */
.directive('mmUserLink', function($state, mmUserProfileState) {
    return {
        restrict: 'A',
        scope: {
            userid: '=',
            courseid: '='
        },
        link: function(scope, element, attrs) {
            element.on('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                $state.go(mmUserProfileState, {courseid: scope.courseid, userid: scope.userid});
            });
        }
    };
});
