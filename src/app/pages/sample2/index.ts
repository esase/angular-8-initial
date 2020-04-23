import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'sample2-page',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sample2Page implements OnInit {
    id: string;
    books: any[];
    loading = true;

    private sub1;

    /**
     * Constructor
     */
    constructor(private route: ActivatedRoute, private apollo: Apollo) { }

    /**
     * Page init
     */
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
        });

        // https://www.apollographql.com/docs/react/api/apollo-client/#apolloclient-functions
        this.sub1 = this.apollo.watchQuery({
            pollInterval: 5000,
            query: gql`
            {
                books {
                    id,
                    title,
                    author {
                        name
                    }
                }
            }
            `,
        })
        .valueChanges.subscribe((result: any) => {
            this.books = result.data && result.data.books;
            this.loading = false;
        });
    }

    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
}
